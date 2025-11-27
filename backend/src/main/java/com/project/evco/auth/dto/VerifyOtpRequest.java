package com.project.evco.auth.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class VerifyOtpRequest {
    @NotBlank
    private String email;

    @NotBlank
    private String code;

    public String getEmail() {
        return this.email;
    }

    public String getCode() {
        return this.code;
    }
}
