package com.project.evco.operation.controller;

import com.project.evco.operation.dto.BookingDto;
import com.project.evco.operation.dto.CreateBookingRequest;
import com.project.evco.operation.service.BookingService;
import com.project.evco.operation.service.ScheduleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class OperationController {

    private final BookingService bookingService;
    private final ScheduleService scheduleService;

    // /v1/bookings
    @GetMapping("/v1/bookings")
    public ResponseEntity<List<BookingDto>> listBookings() {
        return ResponseEntity.ok(bookingService.listBookings());
    }

    @GetMapping("/v1/bookings/{id}")
    public ResponseEntity<BookingDto> getBooking(@PathVariable Long id) {
        return ResponseEntity.ok(bookingService.getBooking(id));
    }

    @PostMapping("/v1/bookings")
    public ResponseEntity<BookingDto> createBooking(
            @RequestBody CreateBookingRequest req,
            Authentication auth
    ) {
        // dùng email làm userId demo: thực tế nên lưu userId trong JWT claim
        Long userId = 0L;
        return ResponseEntity.ok(bookingService.createBooking(req, userId));
    }

    @PutMapping("/v1/bookings/{id}")
    public ResponseEntity<BookingDto> updateBooking(
            @PathVariable Long id,
            @RequestBody CreateBookingRequest req
    ) {
        return ResponseEntity.ok(bookingService.updateBooking(id, req));
    }

    @PostMapping("/v1/bookings/{id}/cancel")
    public ResponseEntity<BookingDto> cancel(@PathVariable Long id) {
        return ResponseEntity.ok(bookingService.cancel(id));
    }

    @PostMapping("/v1/bookings/{id}/approve")
    public ResponseEntity<BookingDto> approve(@PathVariable Long id) {
        return ResponseEntity.ok(bookingService.approve(id));
    }

    // /v1/schedule: FE gọi scheduleService.getCalendar(params)
    @GetMapping("/v1/schedule")
    public ResponseEntity<List<BookingDto>> getCalendar(
            @RequestParam(required = false) Long groupId
    ) {
        return ResponseEntity.ok(scheduleService.getCalendar(groupId));
    }

    // các endpoint khác (history, my bookings) có thể thêm sau
}
