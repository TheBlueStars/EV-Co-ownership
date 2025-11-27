package com.project.evco.controller;

import com.project.evco.operation.entity.Booking;
import com.project.evco.service.BookingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping
    public ResponseEntity<Booking> createBooking(@RequestBody Booking booking) {
        Booking saved = bookingService.createBooking(booking);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/group/{groupId}")
    public ResponseEntity<List<Booking>> listByGroup(@PathVariable Long groupId) {
        return ResponseEntity.ok(bookingService.findByGroupId(groupId));
    }
}
