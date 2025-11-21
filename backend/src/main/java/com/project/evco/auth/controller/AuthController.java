package com.project.evco.auth.controller;

import com.project.evco.auth.dto.AuthResponse;
import com.project.evco.auth.dto.LoginRequest;
import com.project.evco.auth.dto.MeResponse;
import com.project.evco.auth.dto.RegisterRequest;
import com.project.evco.auth.service.AuthService;
import com.project.evco.common.util.JwtUtil;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthService authService;
    private final JwtUtil jwtUtil;

    @PostMapping("/auth/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest req) {
        authService.register(req);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/auth/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest req) {
        return ResponseEntity.ok(authService.login(req));
    }

    // placeholder để FE call, tạm thời trả lại token cũ
    @PostMapping("/auth/refresh")
    public ResponseEntity<AuthResponse> refreshToken(Authentication auth) {
        if (auth == null || auth.getName() == null) {
            return ResponseEntity.status(401).build();
        }
        // đơn giản: login lại với email hiện tại (không có password) -> tốt hơn là tái tạo từ JWT
        // ở đây: đọc JWT từ header trong filter, rồi generate lại.
        String email = auth.getName();
        // có thể tìm user và phát token mới:
        // (ở đây để đơn giản: trả 204 hoặc 501 tùy bạn)
        return ResponseEntity.status(501).build();
    }

    @PostMapping("/auth/logout")
    public ResponseEntity<?> logout() {
        // FE chỉ cần xoá token localStorage, backend tạm 200 OK
        return ResponseEntity.ok().build();
    }

    // FE gọi /me để lấy thông tin user
    @GetMapping("/me")
    public ResponseEntity<MeResponse> me(Authentication auth) {
        if (auth == null || auth.getName() == null) {
            return ResponseEntity.status(401).build();
        }
        String email = auth.getName();
        return ResponseEntity.ok(authService.me(email));
    }
}
