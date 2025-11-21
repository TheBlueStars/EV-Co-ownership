package com.project.evco.governance.repository;

import com.project.evco.governance.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VoteRepository extends JpaRepository<Vote, Long> {
    List<Vote> findByGroupId(Long groupId);
}
