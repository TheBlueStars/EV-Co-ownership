package com.project.evco.entity;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.math.BigDecimal;

@Entity
@Table(name = "ownership_shares")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OwnershipShare implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "group_id")
    private OwnershipGroup group;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private BigDecimal sharePercentage;
}
