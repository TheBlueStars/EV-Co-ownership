package com.project.evco.governance.dto;

import com.project.evco.governance.enums.VoteStatus;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class VoteDto {
    private Long id;
    private Long groupId;
    private String title;
    private String description;
    private int yesCount;
    private int noCount;
    private VoteStatus status;
    private LocalDateTime createdAt;
    private LocalDateTime expiredAt;
}
