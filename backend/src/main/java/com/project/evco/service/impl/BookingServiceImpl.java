package com.project.evco.service.impl;

import com.project.evco.operation.entity.Booking;
import com.project.evco.operation.repository.BookingRepository;
import com.project.evco.service.BookingService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class BookingServiceImpl implements BookingService {

    private final BookingRepository bookingRepository;

    public BookingServiceImpl(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    @Override
    public Booking createBooking(Booking booking) {
        // Basic conflict detection: do not allow overlapping APPROVED/PENDING bookings for the same vehicle
        if (booking.getVehicleId() != null && booking.getStartTime() != null && booking.getEndTime() != null) {
            var conflicts = bookingRepository.findAll().stream()
                    .filter(b -> b.getVehicleId() != null && b.getVehicleId().equals(booking.getVehicleId()))
                    .filter(b -> b.getStatus() != null)
                    .filter(b -> {
                        switch (b.getStatus()) {
                            case APPROVED:
                            case PENDING:
                                return true;
                            default:
                                return false;
                        }
                    })
                    .filter(b -> {
                        // overlap if existing.start < new.end && existing.end > new.start
                        return b.getStartTime() != null && b.getEndTime() != null
                                && b.getStartTime().isBefore(booking.getEndTime())
                                && b.getEndTime().isAfter(booking.getStartTime());
                    })
                    .toList();

            if (!conflicts.isEmpty()) {
                throw new IllegalStateException("Booking conflict: overlapping booking exists for vehicleId=" + booking.getVehicleId());
            }
        }

        if (booking.getStatus() == null) booking.setStatus(com.project.evco.operation.enums.BookingStatus.PENDING);
        return bookingRepository.save(booking);
    }

    @Override
    public List<Booking> findByGroupId(Long groupId) {
        return bookingRepository.findAll().stream()
                .filter(b -> b.getGroupId() != null && b.getGroupId().equals(groupId))
                .collect(Collectors.toList());
    }
}
