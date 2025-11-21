package com.project.evco.governance.dto;

import lombok.Data;

@Data
public class SubmitVoteRequest {
    private Boolean agree; // true = YES, false = NO
}
