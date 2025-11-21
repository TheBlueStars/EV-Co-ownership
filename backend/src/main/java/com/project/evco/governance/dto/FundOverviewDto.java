package com.project.evco.governance.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class FundOverviewDto {
    private Long groupId;
    private Double balance;
    private Integer transactionCount;
}
