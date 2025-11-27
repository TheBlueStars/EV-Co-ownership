package com.project.evco.entity;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.math.BigDecimal;

@Entity
@Table(name = "funds")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Fund implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "group_id")
    private OwnershipGroup group;

    private BigDecimal balance;
}
