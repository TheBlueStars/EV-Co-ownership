package com.project.evco.operation.service;

import com.project.evco.operation.dto.BookingDto;
import com.project.evco.operation.repository.BookingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ScheduleService {

    private final BookingRepository bookingRepository;

    public List<BookingDto> getCalendar(Long groupId) {
        return bookingRepository.findAll().stream()
                .filter(b -> groupId == null || groupId.equals(b.getGroupId()))
                .map(b -> BookingDto.builder()
                        .id(b.getId())
                        .vehicleId(b.getVehicleId())
                        .userId(b.getUserId())
                        .groupId(b.getGroupId())
                        .startTime(b.getStartTime())
                        .endTime(b.getEndTime())
                        .status(b.getStatus())
                        .build())
                .toList();
    }
}
