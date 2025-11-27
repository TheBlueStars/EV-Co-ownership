package com.project.evco.governance.repository;

import com.project.evco.governance.entity.VoteBallot;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VoteBallotRepository extends JpaRepository<VoteBallot, Long> {
    Optional<VoteBallot> findByVoteIdAndUserId(Long voteId, Long userId);
}
