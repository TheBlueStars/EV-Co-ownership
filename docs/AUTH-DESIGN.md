**Authentication & User Service Design**

Use cases

- Authentication: verify JWT for requests, issue tokens for authenticated users.
- User Register: create account, generate OTP verification token, send email.
- User Login: validate credentials, ensure account enabled, return JWT.
- Token Verify: verify OTP and activate account.

Class diagram (Mermaid)

```mermaid
classDiagram
    class AuthService {
        +register(RegisterRequest)
        +login(LoginRequest)
        +verifyOtp(email, code)
        +resendOtp(email)
    }

    class UserService {
        +findById(id)
        +findByEmail(email)
        +update(user)
    }

    class JwtUtil {
        +generateToken(userId, email, role)
        +parseClaims(token)
    }

    class User {
        +id
        +email
        +password
        +fullName
        +role
        +enabled
    }

    AuthService --> UserService
    AuthService --> JwtUtil
    AuthService --> EmailService
    AuthService --> VerificationToken
    UserService --> User
```

Sequence diagram - Login

```mermaid
sequenceDiagram
    participant FE
    participant AuthController
    participant AuthService
    participant UserRepository
    participant JwtUtil

    FE->>AuthController: POST /api/auth/login (email,password)
    AuthController->>AuthService: login(req)
    AuthService->>UserRepository: findByEmail
    UserRepository-->>AuthService: user
    AuthService->>JwtUtil: generateToken(user)
    JwtUtil-->>AuthService: token
    AuthService-->>AuthController: AuthResponse(token, user)
    AuthController-->>FE: 200 OK
```

Sequence diagram - Register + Verify

```mermaid
sequenceDiagram
    participant FE
    participant AuthController
    participant AuthService
    participant UserRepository
    participant VerificationTokenRepo
    participant EmailService

    FE->>AuthController: POST /api/auth/register
    AuthController->>AuthService: register(req)
    AuthService->>UserRepository: save(user enabled=false)
    AuthService->>VerificationTokenRepo: save(code,user,expiresAt)
    AuthService->>EmailService: sendOtp(email,code)
    AuthController-->>FE: 201 Created

    FE->>AuthController: POST /api/auth/verify-otp (email,code)
    AuthController->>AuthService: verifyOtp(email,code)
    AuthService->>VerificationTokenRepo: findFirstByCodeAndUserEmailAndUsedFalse
    VerificationTokenRepo-->>AuthService: token
    AuthService->>UserRepository: update user.enabled = true
    AuthService->>VerificationTokenRepo: mark token used
    AuthController-->>FE: 200 OK
```

DB tables (summary)

- `users` (id, email, password, full_name, phone, role, enabled, created_at)
- `verification_tokens` (id, code, user_id, expires_at, used, created_at)
- `audit_logs` (id, user_id, action, ip, created_at) — optional for login events

References: implementation files under `backend/src/main/java/com/project/evco/auth` and `backend/src/main/java/com/project/evco/common`.
