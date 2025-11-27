**Run backend (dev)**

1. Build the backend

PowerShell (Windows):

```
cd backend
.\mvnw.cmd -DskipTests package
```

2. Run with local MySQL (default configured in `application.yml`)

- Ensure MySQL is running and database exists as configured (default `jdbc:mysql://localhost:3307/evco_db`).
- Set `APP_JWT_SECRET` env var (>=32 bytes) in your shell for stable JWT tokens.

Example (PowerShell):

```
$env:APP_JWT_SECRET = 'replace-with-32-or-more-bytes-secret'
.\mvnw.cmd spring-boot:run -Dspring-boot.run.profiles=dev
```

3. Quick dev without MySQL (H2 fallback)

- The project includes an H2 dev profile file `application-dev.yml` (if present). To run using H2 set profile `dev`.

4. Frontend

```
cd Frontend
npm install
npm run dev
```
