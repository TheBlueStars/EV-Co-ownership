package com.project.evco.repository;

import com.project.evco.entity.FundTransaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FundTransactionRepository extends JpaRepository<FundTransaction, Long> {
}
