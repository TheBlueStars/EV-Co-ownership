package com.project.evco.repository;

import com.project.evco.entity.CostRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CostRecordRepository extends JpaRepository<CostRecord, Long> {
}
