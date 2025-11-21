package com.project.evco.operation.service;

import com.project.evco.operation.dto.BookingDto;
import com.project.evco.operation.dto.CreateBookingRequest;
import com.project.evco.operation.entity.Booking;
import com.project.evco.operation.enums.BookingStatus;
import com.project.evco.operation.repository.BookingRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingService {

    private final BookingRepository bookingRepository;

    public List<BookingDto> listBookings() {
        return bookingRepository.findAll().stream()
                .map(this::toDto)
                .toList();
    }

    public BookingDto getBooking(Long id) {
        return bookingRepository.findById(id)
                .map(this::toDto)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
    }

    @Transactional
    public BookingDto createBooking(CreateBookingRequest req, Long userId) {
        // Check xung đột lịch đơn giản
        var conflicts = bookingRepository.findByVehicleIdAndStatusInAndEndTimeAfter(
                req.getVehicleId(),
                List.of(BookingStatus.PENDING, BookingStatus.APPROVED),
                LocalDateTime.now()
        );
        boolean overlapping = conflicts.stream().anyMatch(b ->
                !req.getEndTime().isBefore(b.getStartTime()) &&
                        !req.getStartTime().isAfter(b.getEndTime())
        );
        if (overlapping) throw new RuntimeException("Thời gian đã có booking khác");

        Booking booking = Booking.builder()
                .vehicleId(req.getVehicleId())
                .userId(userId)
                .groupId(req.getGroupId())
                .startTime(req.getStartTime())
                .endTime(req.getEndTime())
                .status(BookingStatus.PENDING) // hoặc APPROVED tuỳ rule
                .build();
        bookingRepository.save(booking);
        return toDto(booking);
    }

    @Transactional
    public BookingDto updateBooking(Long id, CreateBookingRequest req) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        booking.setStartTime(req.getStartTime());
        booking.setEndTime(req.getEndTime());
        booking.setGroupId(req.getGroupId());
        booking.setVehicleId(req.getVehicleId());
        return toDto(bookingRepository.save(booking));
    }

    @Transactional
    public BookingDto cancel(Long id) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        booking.setStatus(BookingStatus.CANCELLED);
        return toDto(bookingRepository.save(booking));
    }

    @Transactional
    public BookingDto approve(Long id) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        booking.setStatus(BookingStatus.APPROVED);
        return toDto(bookingRepository.save(booking));
    }

    private BookingDto toDto(Booking b) {
        return BookingDto.builder()
                .id(b.getId())
                .vehicleId(b.getVehicleId())
                .userId(b.getUserId())
                .groupId(b.getGroupId())
                .startTime(b.getStartTime())
                .endTime(b.getEndTime())
                .status(b.getStatus())
                .build();
    }
}
