package com.project.evco.config;

import com.project.evco.auth.entity.User;
import com.project.evco.auth.enums.Role;
import com.project.evco.auth.repository.UserRepository;
import com.project.evco.governance.entity.OwnershipGroup;
import com.project.evco.governance.entity.GroupMember;
import com.project.evco.governance.repository.OwnershipGroupRepository;
import com.project.evco.governance.repository.GroupMemberRepository;
import com.project.evco.operation.entity.Vehicle;
import com.project.evco.operation.repository.VehicleRepository;
import com.project.evco.operation.repository.BookingRepository;
import com.project.evco.operation.entity.Booking;
import com.project.evco.operation.enums.BookingStatus;
import com.project.evco.governance.repository.CostRecordRepository;
import com.project.evco.governance.repository.FundRepository;
import com.project.evco.governance.repository.FundTransactionRepository;
import com.project.evco.governance.entity.CostRecord;
import com.project.evco.governance.entity.Fund;
import com.project.evco.governance.entity.FundTransaction;
import com.project.evco.governance.enums.CostType;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Configuration
public class DataSeeder {

    @Bean
        CommandLineRunner seedData(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            VehicleRepository vehicleRepository,
            OwnershipGroupRepository groupRepository,
            GroupMemberRepository groupMemberRepository,
            BookingRepository bookingRepository,
            CostRecordRepository costRecordRepository,
            FundRepository fundRepository,
            FundTransactionRepository fundTransactionRepository,
            // services
            com.project.evco.service.BookingService bookingService,
            com.project.evco.service.CostService costService
        ) {
        return args -> {
            if (userRepository.count() > 0) return; // already seeded

            // Users
            User a = new User();
            a.setEmail("ownerA@example.com");
            a.setPassword(passwordEncoder.encode("password"));
            a.setFullName("Owner A");
            a.setRole(Role.CO_OWNER);
            a.setEnabled(true);
            userRepository.save(a);

            User b = new User();
            b.setEmail("ownerB@example.com");
            b.setPassword(passwordEncoder.encode("password"));
            b.setFullName("Owner B");
            b.setRole(Role.CO_OWNER);
            b.setEnabled(true);
            userRepository.save(b);

            // Vehicle
            Vehicle v = Vehicle.builder()
                    .plateNumber("EV-1234")
                    .brand("EVBrand")
                    .model("Model X")
                    .color("White")
                    .build();
            vehicleRepository.save(v);

            // Group
            OwnershipGroup g = new OwnershipGroup();
            g.setName("Group Alpha");
            g.setVehicleId(v.getId());
            g.setDescription("Test group for demo");
            g.setCreatedAt(LocalDateTime.now());
            groupRepository.save(g);

            // Members
            GroupMember gmA = new GroupMember();
            gmA.setGroupId(g.getId());
            gmA.setUserId(a.getId());
            gmA.setSharePercent(60.0);
            gmA.setGroupAdmin(true);
            groupMemberRepository.save(gmA);

            GroupMember gmB = new GroupMember();
            gmB.setGroupId(g.getId());
            gmB.setUserId(b.getId());
            gmB.setSharePercent(40.0);
            gmB.setGroupAdmin(false);
            groupMemberRepository.save(gmB);

            // Fund (use groupId and primitive numeric types matching entities)
            Fund fund = new Fund();
            fund.setGroupId(g.getId());
            fund.setBalance(1000000.0);
            fund.setUpdatedAt(LocalDateTime.now());
            fundRepository.save(fund);

            // Create a booking (so booking business rules apply)
            Booking booking = new Booking();
            booking.setVehicleId(v.getId());
            booking.setUserId(a.getId());
            booking.setGroupId(g.getId());
            booking.setStartTime(LocalDateTime.now().plusHours(1));
            booking.setEndTime(LocalDateTime.now().plusHours(2));
            booking.setStatus(BookingStatus.APPROVED);
            Booking savedBooking = null;
            try {
                if (bookingService != null) {
                    savedBooking = bookingService.createBooking(booking);
                } else {
                    savedBooking = bookingRepository.save(booking);
                }
            } catch (Exception ex) {
                // fallback to repository
                savedBooking = bookingRepository.save(booking);
            }

            // Cost record (use CostType enum and numeric amount) — use CostService if available so fund deduction runs
            CostRecord cr = new CostRecord();
            cr.setGroupId(g.getId());
            cr.setBookingId(savedBooking != null ? savedBooking.getId() : null);
            cr.setType(CostType.CHARGING);
            cr.setAmount(120000.0);
            cr.setDescription("Demo charging cost");
            cr.setOccurredAt(LocalDateTime.now());
            try {
                if (costService != null) {
                    costService.addCost(cr);
                } else {
                    costRecordRepository.save(cr);
                }
            } catch (Exception ex) {
                costRecordRepository.save(cr);
            }
        };
    }
}
