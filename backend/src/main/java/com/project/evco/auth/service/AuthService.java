package com.project.evco.auth.service;

import com.project.evco.auth.dto.AuthResponse;
import com.project.evco.auth.dto.LoginRequest;
import com.project.evco.auth.dto.MeResponse;
import com.project.evco.auth.dto.RegisterRequest;
import com.project.evco.auth.entity.User;
import com.project.evco.auth.entity.VerificationToken;
import com.project.evco.auth.enums.Role;
import com.project.evco.auth.repository.UserRepository;
import com.project.evco.auth.repository.VerificationTokenRepository;
import com.project.evco.auth.service.EmailService;
import com.project.evco.common.util.JwtUtil;
import jakarta.transaction.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    private final VerificationTokenRepository tokenRepository;
    private final EmailService emailService;

    // Explicit constructor to ensure fields are initialized (avoids IDE/lombok issues)
    public AuthService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder,
                       JwtUtil jwtUtil,
                       VerificationTokenRepository tokenRepository,
                       EmailService emailService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
        this.tokenRepository = tokenRepository;
        this.emailService = emailService;
    }

    @Transactional
    public MeResponse register(RegisterRequest req) {
        userRepository.findByEmail(req.getEmail()).ifPresent(u -> {
            throw new RuntimeException("Email đã tồn tại");
        });

        Role role = req.getRole() != null ? req.getRole() : Role.CO_OWNER;

        User user = new User();
        user.setEmail(req.getEmail());
        user.setPassword(passwordEncoder.encode(req.getPassword()));
        user.setFullName(req.getFullName());
        user.setPhone(req.getPhone());
        user.setRole(role);
        user.setEnabled(false); // require OTP verification
        User saved = userRepository.save(user);

        // create OTP token
        String code = generateOtpCode();
        VerificationToken token = new VerificationToken();
        token.setCode(code);
        token.setUser(saved);
        token.setExpiresAt(java.time.LocalDateTime.now().plusMinutes(10));
        token.setUsed(false);
        tokenRepository.save(token);

        // send OTP via email (best-effort)
        try {
            emailService.sendOtp(saved.getEmail(), code);
        } catch (Exception ignored) {
        }

        MeResponse me = new MeResponse();
        me.setId(saved.getId());
        me.setEmail(saved.getEmail());
        me.setFullName(saved.getFullName());
        me.setPhone(saved.getPhone());
        me.setRole(saved.getRole() != null ? saved.getRole().name() : null);
        return me;
    }

        private String generateOtpCode() {
        int otp = (int) (Math.random() * 900000) + 100000; // 6-digit
        return String.valueOf(otp);
        }

    public AuthResponse login(LoginRequest req) {
        User user = userRepository.findByEmail(req.getEmail())
            .orElseThrow(() -> new org.springframework.security.authentication.BadCredentialsException("Sai email hoặc mật khẩu"));

        if (!user.isEnabled()) {
            throw new org.springframework.security.authentication.DisabledException("Tài khoản chưa được kích hoạt");
        }

        if (!passwordEncoder.matches(req.getPassword(), user.getPassword())) {
            throw new org.springframework.security.authentication.BadCredentialsException("Sai email hoặc mật khẩu");
        }

        String token = jwtUtil.generateToken(user.getId(), user.getEmail(), user.getRole());

        AuthResponse resp = new AuthResponse();
        resp.setToken(token);
        resp.setTokenType("Bearer");
        resp.setUserId(user.getId());
        resp.setEmail(user.getEmail());
        resp.setFullName(user.getFullName());
        resp.setRole(user.getRole() != null ? user.getRole().name() : null);
        return resp;
    }

    public MeResponse me(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy user"));
        MeResponse me = new MeResponse();
        me.setId(user.getId());
        me.setEmail(user.getEmail());
        me.setFullName(user.getFullName());
        me.setPhone(user.getPhone());
        me.setRole(user.getRole() != null ? user.getRole().name() : null);
        return me;
    }

    @Transactional
    public void verifyOtp(String email, String code) {
        VerificationToken token = tokenRepository.findFirstByCodeAndUserEmailAndUsedFalse(code, email)
                .orElseThrow(() -> new RuntimeException("Mã OTP không hợp lệ hoặc đã dùng"));

        if (token.getExpiresAt() != null && token.getExpiresAt().isBefore(java.time.LocalDateTime.now())) {
            throw new RuntimeException("Mã OTP đã hết hạn");
        }

        // activate user
        User user = token.getUser();
        user.setEnabled(true);
        userRepository.save(user);

        token.setUsed(true);
        tokenRepository.save(token);
    }

    @Transactional
    public void resendOtp(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy user"));

        // generate new OTP and save
        String code = generateOtpCode();
        VerificationToken token = new VerificationToken();
        token.setCode(code);
        token.setUser(user);
        token.setExpiresAt(java.time.LocalDateTime.now().plusMinutes(10));
        token.setUsed(false);
        tokenRepository.save(token);

        try {
            emailService.sendOtp(user.getEmail(), code);
        } catch (Exception ignored) {
        }
    }
}
