package com.project.evco.governance.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GroupMemberDto {
    private Long id;
    private Long groupId;
    private Long userId;
    private Double sharePercent;
    private boolean groupAdmin;
}
