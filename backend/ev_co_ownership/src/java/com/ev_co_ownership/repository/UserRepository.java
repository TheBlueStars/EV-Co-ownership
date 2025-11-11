package com.ev_co_ownership.repository;

import com.ev_co_ownership.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
