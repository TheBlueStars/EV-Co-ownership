**Acceptance tests (Auth)**

Postman collection (see `postman/Auth.postman_collection.json`) contains ready requests.

Test cases:
- Register: `POST /api/auth/register` with valid payload -> 201 Created and check email receives OTP (or token exists in DB).
- Login (before verify): `POST /api/auth/login` -> 403 Forbidden (account not enabled).
- Verify OTP: `POST /api/auth/verify-otp` with valid code -> 200 OK and user becomes enabled.
- Login (after verify): `POST /api/auth/login` -> 200 OK and JWT token returned.
- Resend OTP: `POST /api/auth/resend?email=...` -> 200 OK and new OTP created.

Check: `GET /api/me` with `Authorization: Bearer <token>` returns user info.
