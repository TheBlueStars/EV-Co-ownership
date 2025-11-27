package com.project.evco.auth.service;

import com.project.evco.auth.entity.User;

import java.util.Optional;

public interface UserService {
    Optional<User> findById(Long id);

    Optional<User> findByEmail(String email);

    User update(User user);
}
