export default function Footer() {
  return (
    <footer className="bg-slate-100">
      <div className="mx-auto max-w-[1200px] mt-6 rounded-2xl border border-slate-200 bg-white px-6 py-8 md:px-8">
        <div className="grid gap-6 md:grid-cols-4 text-sm text-slate-600">
          {/* Brand + social */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-[#1e90ff]">🚗</span>
              EV Co-ownership
            </div>
            <p>Nền tảng quản lý đồng sở hữu xe điện thông minh, minh bạch và công bằng.</p>
            <div className="flex gap-3">
              <Social href="#" label="Facebook">
                {/* Facebook */}
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#1877F2]"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12Z"/></svg>
              </Social>
              <Social href="#" label="TikTok">
                {/* TikTok */}
                <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="#000" d="M21 8.4a6.5 6.5 0 0 1-4.2-1.6v6.2a6.6 6.6 0 1 1-5.7-6.6v2.8a3.8 3.8 0 1 0 2.8 3.7V2.5h2.6a6.5 6.5 0 0 0 4.5 3v2.9Z"/></svg>
              </Social>
              <Social href="#" label="Twitter">
                {/* Twitter / X */}
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#1DA1F2]"><path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.2 1.7-2.1-.7.5-1.6.8-2.4 1A4 4 0 0 0 12 8.6v.6A9.9 9.9 0 0 1 3.1 5.3a4 4 0 0 0 1.2 5.4c-.6 0-1.1-.2-1.6-.4v.1c0 2 1.5 3.6 3.4 4-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 19.4a11.2 11.2 0 0 0 6.1 1.8c7.3 0 11.4-6.1 11.4-11.4v-.5c.8-.6 1.5-1.3 2.1-2.1Z"/></svg>
              </Social>
            </div>
          </div>

          <Col title="Liên kết nhanh" items={[
            ["Trang chủ","/"],["Tính năng","/tinhnang"],["Về chúng tôi","/vechungsohuu"],["Liên hệ","/lienhe"]
          ]}/>
          <Col title="Tài nguyên" items={[
            ["Hướng dẫn sử dụng","#"],["Chính sách bảo mật","#"],["Điều khoản sử dụng","#"],["Câu hỏi thường gặp","#"]
          ]}/>
          <div>
            <div className="mb-3 font-semibold text-slate-900">Liên hệ</div>
            <ul className="space-y-2">
              <li>📍 123 Đường ABC, Quận 1, TP.HCM</li>
              <li>📞 +84 123 456 789</li>
              <li>✉️ support@ev-coownership.vn</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} EV Co-ownership. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-700">Chính sách bảo mật</a>
            <a href="#" className="hover:text-slate-700">Điều khoản</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, items }) {
  return (
    <div>
      <div className="mb-3 font-semibold text-slate-900">{title}</div>
      <ul className="space-y-2">
        {items.map(([label, href]) => (
          <li key={label}><a className="hover:text-slate-900" href={href}>{label}</a></li>
        ))}
      </ul>
    </div>
  );
}

function Social({ href, label, children }) {
  return (
    <a href={href} aria-label={label}
       className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow hover:brightness-110">
      {children}
    </a>
  );
}
