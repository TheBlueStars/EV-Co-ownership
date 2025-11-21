package com.project.evco.governance.repository;

import com.project.evco.governance.entity.FundTransaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FundTransactionRepository extends JpaRepository<FundTransaction, Long> {
    List<FundTransaction> findByFundId(Long fundId);
}
