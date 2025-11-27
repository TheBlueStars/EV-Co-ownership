package com.project.evco.service.impl;

import com.project.evco.governance.entity.CostRecord;
import com.project.evco.governance.entity.Fund;
import com.project.evco.governance.entity.FundTransaction;
import com.project.evco.governance.entity.GroupMember;
import com.project.evco.governance.repository.CostRecordRepository;
import com.project.evco.governance.repository.FundRepository;
import com.project.evco.governance.repository.FundTransactionRepository;
import com.project.evco.governance.repository.GroupMemberRepository;
import com.project.evco.service.CostService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class CostServiceImpl implements CostService {

    private final CostRecordRepository costRecordRepository;
    private final FundRepository fundRepository;
    private final FundTransactionRepository fundTransactionRepository;
    private final GroupMemberRepository groupMemberRepository;

    public CostServiceImpl(CostRecordRepository costRecordRepository,
                           FundRepository fundRepository,
                           FundTransactionRepository fundTransactionRepository,
                           GroupMemberRepository groupMemberRepository) {
        this.costRecordRepository = costRecordRepository;
        this.fundRepository = fundRepository;
        this.fundTransactionRepository = fundTransactionRepository;
        this.groupMemberRepository = groupMemberRepository;
    }

    @Override
    public CostRecord addCost(CostRecord record) {
        CostRecord saved = costRecordRepository.save(record);

        // Attempt to deduct from group's fund (if exists)
        if (saved.getGroupId() != null && saved.getAmount() != null) {
            fundRepository.findByGroupId(saved.getGroupId()).ifPresent(fund -> {
                double newBalance = (fund.getBalance() == null ? 0.0 : fund.getBalance()) - saved.getAmount();
                fund.setBalance(newBalance);
                fund.setUpdatedAt(java.time.LocalDateTime.now());
                fundRepository.save(fund);

                // record fund transaction
                FundTransaction tx = new FundTransaction();
                tx.setFundId(fund.getId());
                tx.setAmount(saved.getAmount());
                tx.setDescription("Auto-deduct for cost id=" + saved.getId());
                tx.setCreatedAt(java.time.LocalDateTime.now());
                fundTransactionRepository.save(tx);
            });

            // compute split by share (non-persistent simple output/log)
            var members = groupMemberRepository.findByGroupId(saved.getGroupId());
            if (members != null && !members.isEmpty()) {
                for (GroupMember m : members) {
                    double share = (m.getSharePercent() == null ? 0.0 : m.getSharePercent()) / 100.0;
                    double part = saved.getAmount() * share;
                    // For now, we simply log allocation; later we can persist per-member liabilities
                    System.out.println("Allocating " + part + " to member userId=" + m.getUserId());
                }
            }
        }

        return saved;
    }

    @Override
    public List<CostRecord> findByGroupId(Long groupId) {
        return costRecordRepository.findAll().stream()
                .filter(c -> c.getGroupId() != null && c.getGroupId().equals(groupId))
                .collect(Collectors.toList());
    }
}
