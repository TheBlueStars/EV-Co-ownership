package com.example.evcoowner;

import com.example.evcoowner.service.AuthService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class AuthServiceTest {
    private AuthService authService;

    @BeforeEach
    void setUp() {
        authService = new AuthService();
    }

    @Test
    void testRegisterSuccess() {
        boolean result = authService.register("datnt", "123456");
        Assertions.assertTrue(result);
    }

    @Test
    void testRegisterDuplicate() {
        authService.register("datnt", "123456");
        boolean result = authService.register("datnt", "123456");
        Assertions.assertFalse(result);
    }

    @Test
    void testLoginSuccess() {
        authService.register("datnt", "123456");
        Assertions.assertTrue(authService.login("datnt", "123456"));
    }

    @Test
    void testLoginFail() {
        Assertions.assertFalse(authService.login("unknown", "123456"));
    }
}
