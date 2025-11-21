package com.project.evco.operation.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CreateBookingRequest {
    private Long vehicleId;
    private Long groupId;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
}
