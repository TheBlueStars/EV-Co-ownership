// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Brand + desc + socials */}
          <div>
            <div className="flex items-center gap-2">
              <BrandLogo />
              <span className="font-semibold text-sky-700">
                EV <span className="text-emerald-600">Co-ownership</span>
              </span>
            </div>

            <p className="mt-4 text-sm text-slate-500 max-w-xs">
              Nền tảng quản lý đồng sở hữu xe điện thông minh, minh bạch và công bằng
            </p>

            <div className="mt-5 flex items-center gap-3 text-slate-600">
              <IconBtn ariaLabel="Facebook"><FacebookIcon/></IconBtn>
              <IconBtn ariaLabel="Twitter/X"><TwitterIcon/></IconBtn>
              <IconBtn ariaLabel="Instagram"><InstagramIcon/></IconBtn>
              <IconBtn ariaLabel="YouTube"><YoutubeIcon/></IconBtn>
            </div>
          </div>

          {/* Liên kết nhanh */}
          <div>
            <div className="font-semibold mb-3">Liên kết nhanh</div>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link to="/" className="hover:text-slate-800">Trang chủ</Link></li>
              <li><a href="#features" className="hover:text-slate-800">Tính năng</a></li>
              <li><Link to="/about" className="hover:text-slate-800">Về chúng tôi</Link></li>
              <li><Link to="/contact" className="hover:text-slate-800">Liên hệ</Link></li>
            </ul>
          </div>

          {/* Tài nguyên */}
          <div>
            <div className="font-semibold mb-3">Tài nguyên</div>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link to="/docs" className="hover:text-slate-800">Hướng dẫn sử dụng</Link></li>
              <li><Link to="/policy" className="hover:text-slate-800">Chính sách bảo mật</Link></li>
              <li><Link to="/terms" className="hover:text-slate-800">Điều khoản sử dụng</Link></li>
              <li><Link to="/faq" className="hover:text-slate-800">Câu hỏi thường gặp</Link></li>
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <div className="font-semibold mb-3">Liên hệ</div>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>📍 123 Đường ABC, Quận 1, TP.HCM</li>
              <li>📞 +84 234 456 789</li>
              <li>✉️ support@ev-coownership.vn</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-slate-200" />

        {/* Bottom row */}
        <div className="py-4 text-xs text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-4 w-4"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" fill="#e5e7eb"/><path d="M12 6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1zm0 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" fill="#9ca3af"/></svg>
            <span>© {new Date().getFullYear()} EV Co-ownership. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-8">
            <Link to="/policy" className="hover:text-slate-700">Chính sách bảo mật</Link>
            <Link to="/terms" className="hover:text-slate-700">Điều khoản</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* --- helpers --- */
function IconBtn({ ariaLabel, children }) {
  return (
    <a href="#" aria-label={ariaLabel}
       className="h-9 w-9 grid place-items-center rounded-md ring-1 ring-slate-300 hover:bg-slate-50">
      {children}
    </a>
  );
}
function BrandLogo() {
  return (
    <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-sky-600 to-emerald-500 grid place-items-center text-white">
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <rect x="2" y="6" width="20" height="12" rx="3" fill="currentColor" />
        <circle cx="8" cy="12" r="2.3" fill="#fff" />
        <circle cx="16" cy="12" r="2.3" fill="#fff" />
      </svg>
    </div>
  );
}
function FacebookIcon(){return(<svg viewBox="0 0 24 24" className="h-4 w-4"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v3H8v3h3v6h3v-6h3l1-3h-4V9z" fill="currentColor"/></svg>);}
function TwitterIcon(){return(<svg viewBox="0 0 24 24" className="h-4 w-4"><path d="M22 5.8c-.7.3-1.5.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.8-2.6 1-1.6-1.6-4.2-1.3-5.6.5-1 1.3-1 3.1.2 4.3-2.2-.1-4.2-1.2-5.6-2.9-.7 1.3-.3 3 1 3.9-.6 0-1.2-.2-1.7-.5 0 1.7 1.2 3.2 2.8 3.5-.5.1-1 .2-1.6.1.5 1.5 1.9 2.6 3.5 2.6-1.4 1.1-3.2 1.7-5 1.7H4c1.8 1.2 3.9 1.9 6.2 1.9 7.5 0 11.6-6.3 11.3-11.9.8-.5 1.5-1.2 2-2z" fill="currentColor"/></svg>);}
function InstagramIcon(){return(<svg viewBox="0 0 24 24" className="h-4 w-4"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" fill="currentColor"/></svg>);}
function YoutubeIcon(){return(<svg viewBox="0 0 24 24" className="h-4 w-4"><path d="M23 8s-.2-1.7-.9-2.4c-.9-.9-1.9-.9-2.4-1C16.9 4 12 4 12 4s-4.9 0-7.7.6c-.5.1-1.6.1-2.4 1C1.2 6.3 1 8 1 8v3.3c0 1.7.2 3.4.9 4.1.9.9 2 .9 2.5 1 2.8.6 7.7.6 7.7.6s4.9 0 7.7-.6c.5-.1 1.6-.1 2.5-1 .7-.7.9-2.4.9-2.4V8zm-13 6V8l6 3-6 3z" fill="currentColor"/></svg>);}
