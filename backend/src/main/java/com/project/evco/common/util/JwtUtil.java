package com.project.evco.common.util;

import com.project.evco.auth.enums.Role;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtUtil {

    @Value("${app.jwt.secret}")
    private String secret;

    @Value("${app.jwt.expires-in}")
    private long expiresIn;

    public String generateToken(Long userId, String email, Role role) {
        Date now = new Date();
        Date exp = new Date(now.getTime() + expiresIn);

        return Jwts.builder()
                .setSubject(String.valueOf(userId))
                .setIssuedAt(now)
                .setExpiration(exp)
                .addClaims(Map.of(
                        "email", email,
                        "role", role.name()
                ))
                .signWith(SignatureAlgorithm.HS256, secret.getBytes())
                .compact();
    }

    public Claims parseClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(secret.getBytes())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public <T> T getClaim(String token, Function<Claims, T> resolver) {
        return resolver.apply(parseClaims(token));
    }

    public String getEmail(String token) {
        return getClaim(token, claims -> (String) claims.get("email"));
    }

    public String getRole(String token) {
        return getClaim(token, claims -> (String) claims.get("role"));
    }

    public Long getUserId(String token) {
        return Long.valueOf(getClaim(token, Claims::getSubject));
    }
}
