package com.project.evco.auth.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MeResponse {
    private Long id;
    private String email;
    private String fullName;
    private String phone;
    private String role;
}
