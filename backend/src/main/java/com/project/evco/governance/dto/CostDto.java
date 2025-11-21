package com.project.evco.governance.dto;

import com.project.evco.governance.enums.CostType;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class CostDto {
    private Long id;
    private Long groupId;
    private Long bookingId;
    private CostType type;
    private Double amount;
    private String description;
    private LocalDateTime occurredAt;
}
