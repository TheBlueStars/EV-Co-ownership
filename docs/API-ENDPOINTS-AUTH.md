**Auth API Endpoints (summary)**

- `POST /api/auth/register` — Register user (body: `RegisterRequest { email, password, fullName, phone }`). Returns `MeResponse` (user info).
- `POST /api/auth/login` — Login (body: `LoginRequest { email, password }`). Returns `AuthResponse { token, tokenType, userId, email, fullName, role }`.
- `POST /api/auth/verify-otp` — Verify OTP (body: `VerifyOtpRequest { email, code }`). Returns 200 OK.
- `POST /api/auth/resend?email=...` — Resend OTP to email. Returns 200 OK.
- `GET /api/me` — Get current user info. Authorization: Bearer token.

Notes: controllers currently accept entity DTOs defined under `backend/src/main/java/com/project/evco/auth/dto`.
