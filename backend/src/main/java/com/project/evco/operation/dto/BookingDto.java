package com.project.evco.operation.dto;

import com.project.evco.operation.enums.BookingStatus;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class BookingDto {
    private Long id;
    private Long vehicleId;
    private Long userId;
    private Long groupId;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private BookingStatus status;
}
