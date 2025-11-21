package com.project.evco.auth.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "verification_tokens")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VerificationToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;

    private String token;

    private LocalDateTime expiredAt;

    private boolean used;

    @PrePersist
    void prePersist() {
        if (expiredAt == null) {
            expiredAt = LocalDateTime.now().plusMinutes(10);
        }
        used = false;
    }
}
