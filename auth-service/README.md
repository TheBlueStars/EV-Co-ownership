# Auth Service (Spring Boot) - Full Option

Features:
- JWT access token containing username + roles
- Refresh token stored in DB with expiry
- Role-based authorization (ROLE_USER / ROLE_ADMIN)
- DTOs: AuthRequestDTO, AuthResponseDTO, UserDTO, RefreshTokenRequestDTO
- H2 in-memory DB for demo

## Run
Requirements: Java 17+, Maven
```
mvn package
java -jar target/auth-service-full-0.0.1-SNAPSHOT.jar
```

## Endpoints
- POST /api/auth/register  { username, password }
- POST /api/auth/login     { username, password } -> { accessToken, refreshToken }
- POST /api/auth/refresh-token { refreshToken } -> { accessToken, refreshToken }
- POST /api/auth/logout
- GET  /api/auth/me
- GET  /api/admin/ping (requires ROLE_ADMIN)

## Notes
- Replace jwt.secret with a secure secret (>= 32 bytes) in production.
- This project is a learning/demo baseline — improve validation, error handling, logging for production.
