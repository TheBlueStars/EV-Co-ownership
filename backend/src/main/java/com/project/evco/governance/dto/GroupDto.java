package com.project.evco.governance.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GroupDto {
    private Long id;
    private String name;
    private String description;
    private Long vehicleId;
}
