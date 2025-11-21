package com.project.evco.operation.repository;

import com.project.evco.operation.entity.Booking;
import com.project.evco.operation.enums.BookingStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByUserId(Long userId);
    List<Booking> findByVehicleIdAndStatusInAndEndTimeAfter(
            Long vehicleId,
            List<BookingStatus> statuses,
            LocalDateTime now
    );
}
