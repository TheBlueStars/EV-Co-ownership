package com.project.evco.governance.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "funds")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder
public class Fund {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long groupId;

    private Double balance;

    private LocalDateTime updatedAt;
}
