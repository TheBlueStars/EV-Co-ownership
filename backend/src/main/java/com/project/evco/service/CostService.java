package com.project.evco.service;

import com.project.evco.governance.entity.CostRecord;

import java.util.List;

public interface CostService {
    CostRecord addCost(CostRecord record);

    List<CostRecord> findByGroupId(Long groupId);
}
