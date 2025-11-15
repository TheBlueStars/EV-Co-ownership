import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const MOCK_USERS = {
  "admin@gmail.com": { role: "ADMIN" },
  "staff@gmail.com": { role: "STAFF" },
  "coowner@gmail.com": { role: "CO_OWNER" },
};

export default function Login() {
  const [email, setEmail] = useState("coowner@gmail.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const userMock = MOCK_USERS[email.trim().toLowerCase()];
    if (!userMock || password !== "123456") {
      setError("Email hoặc mật khẩu không đúng (mock: *@gmail.com / 123456)");
      return;
    }

    const user = {
      email,
      role: userMock.role,
      name:
        userMock.role === "ADMIN"
          ? "Admin"
          : userMock.role === "STAFF"
          ? "Staff"
          : "Co-owner",
    };

    localStorage.setItem("user", JSON.stringify(user));

    // Nếu có location.state.from (bị redirect từ private) → quay lại đó
    const from = location.state?.from?.pathname;

    if (from) {
      navigate(from, { replace: true });
      return;
    }

    // Điều hướng theo role
    if (user.role === "ADMIN") {
      navigate("/admin", { replace: true });
    } else if (user.role === "STAFF") {
      navigate("/staff", { replace: true });
    } else if (user.role === "CO_OWNER") {
      navigate("/coowner/bookings", { replace: true });
    } else {
      navigate("/dashboard", { replace: true });
    }
  };

  return (
    <section className="bg-slate-100">
      <div className="mx-auto flex min-h-[70vh] max-w-[900px] items-center justify-center px-4 py-10">
        <div className="w-full max-w-[420px] rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,.18)]">
          <h1 className="text-xl font-extrabold text-slate-900">
            Đăng nhập EV Co-ownership
          </h1>
          <p className="mt-1 text-xs text-slate-600">
            Mock login: admin / staff / coowner &nbsp;–&nbsp; mật khẩu:{" "}
            <span className="font-mono">123456</span>
          </p>

          <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:bg-white"
                placeholder="coowner@gmail.com"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700">
                Mật khẩu
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:bg-white"
                placeholder="123456"
              />
            </div>

            {error && (
              <p className="text-xs text-rose-600 bg-rose-50 border border-rose-100 rounded-xl px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 active:translate-y-[1px]"
            >
              Đăng nhập (mock)
            </button>

            <div className="mt-3 text-[11px] text-slate-500">
              <div> admin@gmail.com → ADMIN</div>
              <div> staff@gmail.com → STAFF</div>
              <div> coowner@gmail.com → CO_OWNER</div>
              <div>🔑 mật khẩu chung: 123456</div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
