package com.project.evco.governance.repository;

import com.project.evco.governance.entity.Fund;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FundRepository extends JpaRepository<Fund, Long> {
    Optional<Fund> findByGroupId(Long groupId);
}
