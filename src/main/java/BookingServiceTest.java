package com.example.evcoowner;

import com.example.evcoowner.model.Booking;
import com.example.evcoowner.service.BookingService;
import com.example.evcoowner.exception.OverlapException;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import java.time.LocalDateTime;

public class BookingServiceTest {
    private BookingService bookingService;

    @BeforeEach
    void setUp() {
        bookingService = new BookingService();
    }

    @Test
    void testAddBookingSuccess() {
        bookingService.addBooking(new Booking(
                LocalDateTime.of(2025, 11, 1, 8, 0),
                LocalDateTime.of(2025, 11, 1, 9, 0)
        ));
        Assertions.assertEquals(1, bookingService.getAllBookings().size());
    }

    @Test
    void testAddBookingOverlapFail() {
        bookingService.addBooking(new Booking(
                LocalDateTime.of(2025, 11, 1, 8, 0),
                LocalDateTime.of(2025, 11, 1, 9, 0)
        ));
        Assertions.assertThrows(OverlapException.class, () -> {
            bookingService.addBooking(new Booking(
                    LocalDateTime.of(2025, 11, 1, 8, 30),
                    LocalDateTime.of(2025, 11, 1, 9, 30)
            ));
        });
    }
}
