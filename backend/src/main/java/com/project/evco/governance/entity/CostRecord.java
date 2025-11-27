package com.project.evco.governance.entity;

import com.project.evco.governance.enums.CostType;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "cost_records")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder
public class CostRecord {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long groupId;
    private Long bookingId;

    @Enumerated(EnumType.STRING)
    private CostType type;

    private Double amount;

    private String description;

    private LocalDateTime occurredAt;

    // Explicit accessors to ensure IDE/compiler can resolve them even if Lombok isn't processed
    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
