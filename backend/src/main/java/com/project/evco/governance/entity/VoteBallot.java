package com.project.evco.governance.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "vote_ballots")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder
public class VoteBallot {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long voteId;
    private Long userId;

    private Boolean agree; // true = YES, false = NO

    private LocalDateTime createdAt;

    @PrePersist
    void prePersist() {
        createdAt = LocalDateTime.now();
    }
}
