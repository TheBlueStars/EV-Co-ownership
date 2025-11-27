package com.project.evco.governance.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CreateVoteRequest {
    private Long groupId;
    private String title;
    private String description;
    private LocalDateTime expiredAt;
}
