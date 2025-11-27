package com.project.evco.governance.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "fund_transactions")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder
public class FundTransaction {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long fundId;
    private Double amount;
    private String description;
    private LocalDateTime createdAt;
}
