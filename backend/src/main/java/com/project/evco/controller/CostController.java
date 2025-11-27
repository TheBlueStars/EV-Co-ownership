package com.project.evco.controller;

import com.project.evco.governance.entity.CostRecord;
import com.project.evco.service.CostService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/groups/{groupId}/costs")
public class CostController {

    private final CostService costService;

    public CostController(CostService costService) {
        this.costService = costService;
    }

    @PostMapping
    public ResponseEntity<CostRecord> addCost(@PathVariable Long groupId, @RequestBody CostRecord record) {
        record.setGroupId(groupId);
        CostRecord saved = costService.addCost(record);
        return ResponseEntity.ok(saved);
    }

    @GetMapping
    public ResponseEntity<List<CostRecord>> listCosts(@PathVariable Long groupId) {
        return ResponseEntity.ok(costService.findByGroupId(groupId));
    }
}
