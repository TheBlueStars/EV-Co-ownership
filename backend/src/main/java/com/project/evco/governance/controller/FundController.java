package com.project.evco.governance.controller;

import com.project.evco.governance.entity.Fund;
import com.project.evco.governance.entity.FundTransaction;
import com.project.evco.governance.repository.FundRepository;
import com.project.evco.governance.repository.FundTransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class FundController {

    private final FundRepository fundRepository;
    private final FundTransactionRepository fundTransactionRepository;

    @GetMapping("/v1/fund")
    public ResponseEntity<Map<String, Object>> getFund(
            @RequestParam(required = false) Long groupId
    ) {
        Long gId = groupId != null ? groupId : 1L; // demo
        Fund fund = fundRepository.findByGroupId(gId)
                .orElse(Fund.builder().groupId(gId).balance(0.0).build());
        return ResponseEntity.ok(Map.of(
                "groupId", gId,
                "balance", fund.getBalance() == null ? 0.0 : fund.getBalance()
        ));
    }

    @GetMapping("/v1/fund/transactions")
    public ResponseEntity<List<FundTransaction>> listTransactions(
            @RequestParam(required = false) Long groupId
    ) {
        Long gId = groupId != null ? groupId : 1L;
        Fund fund = fundRepository.findByGroupId(gId)
                .orElse(null);
        if (fund == null || fund.getId() == null) {
            return ResponseEntity.ok(List.of());
        }
        return ResponseEntity.ok(fundTransactionRepository.findByFundId(fund.getId()));
    }

    @PostMapping("/v1/fund/transactions")
    public ResponseEntity<FundTransaction> createTransaction(
            @RequestBody FundTransaction tx,
            @RequestParam(required = false) Long groupId
    ) {
        Long gId = groupId != null ? groupId : 1L;
        Fund fund = fundRepository.findByGroupId(gId)
                .orElseGet(() -> fundRepository.save(Fund.builder()
                        .groupId(gId)
                        .balance(0.0)
                        .updatedAt(LocalDateTime.now())
                        .build()));

        tx.setFundId(fund.getId());
        tx.setCreatedAt(LocalDateTime.now());
        FundTransaction saved = fundTransactionRepository.save(tx);

        double newBalance = (fund.getBalance() == null ? 0.0 : fund.getBalance()) + tx.getAmount();
        fund.setBalance(newBalance);
        fund.setUpdatedAt(LocalDateTime.now());
        fundRepository.save(fund);

        return ResponseEntity.ok(saved);
    }
}
