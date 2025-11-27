package com.project.evco.governance.controller;

import com.project.evco.governance.entity.CostRecord;
import com.project.evco.governance.repository.CostRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController("governanceCostController")
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class CostController {

    private final CostRecordRepository costRecordRepository;

    @Autowired
    public CostController(CostRecordRepository costRecordRepository) {
        this.costRecordRepository = costRecordRepository;
    }

    @GetMapping("/v1/costs")
    public ResponseEntity<List<CostRecord>> listCosts() {
        return ResponseEntity.ok(costRecordRepository.findAll());
    }

    @GetMapping("/v1/costs/{id}")
    public ResponseEntity<CostRecord> getCost(@PathVariable Long id) {
        return costRecordRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/v1/costs")
    public ResponseEntity<CostRecord> createCost(@RequestBody CostRecord cost) {
        return ResponseEntity.ok(costRecordRepository.save(cost));
    }

    @PutMapping("/v1/costs/{id}")
    public ResponseEntity<CostRecord> updateCost(
            @PathVariable Long id,
            @RequestBody CostRecord cost
    ) {
        return costRecordRepository.findById(id)
                .map(existing -> {
                    cost.setId(id);
                    return ResponseEntity.ok(costRecordRepository.save(cost));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/v1/costs/{id}")
    public ResponseEntity<?> deleteCost(@PathVariable Long id) {
        if (!costRecordRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        costRecordRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
