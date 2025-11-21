package com.project.evco.auth.repository;

import com.project.evco.auth.entity.VerificationToken;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Long> {

    Optional<VerificationToken> findTopByEmailOrderByIdDesc(String email);

    Optional<VerificationToken> findByEmailAndTokenAndUsedFalse(String email, String token);
}
