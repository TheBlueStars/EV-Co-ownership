package com.project.evco.governance.entity;

import com.project.evco.governance.enums.VoteStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "votes")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder
public class Vote {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long groupId;

    private String title;
    private String description;

    // đơn giản: YES / NO
    private int yesCount;
    private int noCount;

    @Enumerated(EnumType.STRING)
    private VoteStatus status;

    private LocalDateTime createdAt;
    private LocalDateTime expiredAt;

    @PrePersist
    void prePersist() {
        createdAt = LocalDateTime.now();
        if (status == null) status = VoteStatus.OPEN;
    }
}
