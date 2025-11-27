package com.project.evco.service;

import com.project.evco.operation.entity.Booking;

import java.util.List;

public interface BookingService {
    Booking createBooking(Booking booking);

    List<Booking> findByGroupId(Long groupId);
}
