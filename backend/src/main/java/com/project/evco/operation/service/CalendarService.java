package com.project.evco.operation.service;

import com.project.evco.operation.dto.CalendarDto;
import com.project.evco.operation.entity.Booking;
import com.project.evco.operation.repository.BookingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CalendarService {

    private final BookingRepository bookingRepository;

    public List<CalendarDto> getByGroup(Long groupId) {
        return bookingRepository.findAll().stream()
                .filter(b -> groupId == null || groupId.equals(b.getGroupId()))
                .map(this::toDto)
                .toList();
    }

    private CalendarDto toDto(Booking b) {
        return CalendarDto.builder()
                .bookingId(b.getId())
                .vehicleId(b.getVehicleId())
                .userId(b.getUserId())
                .groupId(b.getGroupId())
                .startTime(b.getStartTime())
                .endTime(b.getEndTime())
                .status(b.getStatus())
                .build();
    }
}
