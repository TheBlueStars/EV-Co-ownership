package com.project.evco.governance.service;

import com.project.evco.governance.dto.FundOverviewDto;
import com.project.evco.governance.entity.Fund;
import com.project.evco.governance.repository.FundRepository;
import com.project.evco.governance.repository.FundTransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FundService {

    private final FundRepository fundRepository;
    private final FundTransactionRepository txRepository;

    public FundOverviewDto overview(Long groupId) {
        Fund fund = fundRepository.findByGroupId(groupId)
                .orElse(null);
        double balance = fund == null || fund.getBalance() == null
                ? 0.0 : fund.getBalance();
        int count = 0;
        if (fund != null && fund.getId() != null) {
            count = txRepository.findByFundId(fund.getId()).size();
        }
        return FundOverviewDto.builder()
                .groupId(groupId)
                .balance(balance)
                .transactionCount(count)
                .build();
    }
}
