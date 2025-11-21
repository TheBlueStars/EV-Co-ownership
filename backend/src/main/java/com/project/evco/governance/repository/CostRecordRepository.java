package com.project.evco.governance.repository;

import com.project.evco.governance.entity.CostRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CostRecordRepository extends JpaRepository<CostRecord, Long> {
}
