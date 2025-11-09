// src/pages/co-owner/Contact.jsx
import React, { useState } from "react";
import PageHeader from "../../components/PageHeader.jsx";
import Footer from "../../components/Footer.jsx";
import { Link } from "react-router-dom";

/* ==== small icon components ==== */
const PinIcon = (props) => (
    <svg viewBox="0 0 24 24" className={props.className || "h-6 w-6"} fill="none">
        <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
);
const PhoneIcon = (props) => (
    <svg viewBox="0 0 24 24" className={props.className || "h-6 w-6"} fill="none">
        <path d="M6 3h3l2 5-2 1a12 12 0 0 0 7 7l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.7" />
    </svg>
);
const MailIcon = (props) => (
    <svg viewBox="0 0 24 24" className={props.className || "h-6 w-6"} fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3.5 7l8.4 6a1.5 1.5 0 0 0 1.8 0l8.4-6" stroke="currentColor" strokeWidth="1.7" />
    </svg>
);

export default function Contact() {
    const [form, setForm] = useState({
        name: "", email: "", phone: "", subject: "", message: "",
    });
    const onChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    const onReset = () =>
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    const onSubmit = (e) => {
        e.preventDefault();
        // TODO: gọi API gửi liên hệ
        console.log("CONTACT_FORM_SUBMIT", form);
        onReset();
        alert("Đã gửi tin nhắn! Chúng tôi sẽ phản hồi trong 24 giờ làm việc.");
    };

    return (
        <main className="min-h-screen flex flex-col bg-slate-50">
            <PageHeader />

            {/* ===== Hero ===== */}
            <section className="bg-slate-100/80 border-y">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
                    <div className="mx-auto w-fit mb-6">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 rounded-full ring-1 ring-slate-300 bg-white px-4 py-2 text-sm text-slate-700"
                        >
                            <PinIcon className="h-4 w-4" />
                            Liên hệ với chúng tôi
                        </Link>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
                        Chúng tôi sẵn sàng{" "}
                        <span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
                            hỗ trợ bạn
                        </span>
                    </h1>
                    <p className="mt-3 text-center text-slate-600">
                        Có câu hỏi hoặc cần hỗ trợ? Hãy liên hệ với chúng tôi, đội ngũ sẵn sàng hỗ trợ 24/7
                    </p>
                </div>
            </section>

            {/* ===== Form ===== */}
            <section className="py-10">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 p-6 sm:p-8">
                        <h2 className="text-xl font-semibold text-slate-900 mb-6">
                            Gửi tin nhắn cho chúng tôi
                        </h2>

                        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-slate-700">Họ và tên*</label>
                                <input
                                    name="name" value={form.name} onChange={onChange}
                                    required
                                    placeholder="Nguyễn Văn A"
                                    className="mt-1 w-full rounded-xl border-slate-300 bg-slate-50 px-3 py-2 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-sky-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-slate-700">Email*</label>
                                <input
                                    type="email" name="email" value={form.email} onChange={onChange}
                                    required
                                    placeholder="email@example.com"
                                    className="mt-1 w-full rounded-xl border-slate-300 bg-slate-50 px-3 py-2 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-sky-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-slate-700">Số điện thoại</label>
                                <input
                                    name="phone" value={form.phone} onChange={onChange}
                                    placeholder="+84 123 456 789"
                                    className="mt-1 w-full rounded-xl border-slate-300 bg-slate-50 px-3 py-2 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-sky-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-slate-700">Chủ đề</label>
                                <input
                                    name="subject" value={form.subject} onChange={onChange}
                                    placeholder="Yêu cầu hỗ trợ"
                                    className="mt-1 w-full rounded-xl border-slate-300 bg-slate-50 px-3 py-2 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-sky-500 outline-none"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="text-sm font-medium text-slate-700">Nội dung tin nhắn*</label>
                                <textarea
                                    name="message" value={form.message} onChange={onChange}
                                    required rows={6}
                                    placeholder="Nhập nội dung tin nhắn của bạn..."
                                    className="mt-1 w-full rounded-2xl border-slate-300 bg-slate-50 px-3 py-3 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-sky-500 outline-none resize-none"
                                />
                            </div>

                            <div className="md:col-span-2 mt-2 flex items-center gap-3">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center rounded-xl bg-sky-600 px-5 py-3 text-white text-sm font-semibold hover:bg-sky-700"
                                >
                                    Gửi tin nhắn
                                </button>
                                <button
                                    type="button" onClick={onReset}
                                    className="inline-flex justify-center rounded-xl px-5 py-3 text-sm font-medium ring-1 ring-slate-300 hover:bg-slate-50"
                                >
                                    Xóa
                                </button>
                                <p className="ml-auto text-xs text-slate-500">
                                    Chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* ===== Contact blocks ===== */}
            <section className="pb-6">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-4">
                    <InfoCard
                        icon={<PinIcon className="h-7 w-7 text-sky-600" />}
                        title="Địa chỉ văn phòng"
                        lines={["123 Đường ABC, Quận 1", "TP. Hồ Chí Minh, Việt Nam"]}
                    />
                    <InfoCard
                        icon={<PhoneIcon className="h-7 w-7 text-emerald-600" />}
                        title="Điện thoại"
                        lines={["Hotline: +84 123 456 789", "Hỗ trợ: +84 987 654 321"]}
                    />
                    <InfoCard
                        icon={<MailIcon className="h-7 w-7 text-sky-600" />}
                        title="Email"
                        lines={["support@ev-coownership.vn", "sales@ev-coownership.vn"]}
                    />
                </div>
            </section>

            {/* ===== Map placeholder (gradient panel) ===== */}
            <section className="py-10">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl ring-1 ring-slate-200 overflow-hidden">
                        <div className="h-56 sm:h-72 md:h-80 flex items-center justify-center bg-gradient-to-r from-sky-300/60 to-emerald-300/60">
                            <div className="flex items-center gap-3 text-slate-800">
                                <PinIcon className="h-9 w-9" />
                                <span className="text-lg font-semibold">Bản đồ văn phòng</span>
                            </div>
                        </div>

                        {/*
            // Nếu muốn nhúng map thật:
            <iframe
              title="office-map"
              src="https://www.google.com/maps/embed?pb=..."
              className="w-full h-[420px] border-0"
              loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
            */}
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="pb-14">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Câu hỏi thường gặp</h3>
                    <div className="space-y-3">
                        <FaqItem
                            q="Làm thế nào để bắt đầu sử dụng EV Co-ownership?"
                            a="Bạn chỉ cần đăng ký tài khoản, hoàn tất xác thực KYC và có thể tạo hoặc tham gia nhóm đồng sở hữu ngay."
                        />
                        <FaqItem
                            q="Chi phí sử dụng nền tảng như thế nào?"
                            a="Chúng tôi có các gói phí linh hoạt dựa trên số lượng thành viên và tính năng sử dụng. Liên hệ để được tư vấn chi tiết."
                        />
                        <FaqItem
                            q="Hệ thống có hỗ trợ thanh toán trực tuyến không?"
                            a="Có, chúng tôi tích hợp đầy đủ các cổng thanh toán e-wallet và banking phổ biến tại Việt Nam."
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

/* ===== helpers ===== */
function InfoCard({ icon, title, lines = [] }) {
    return (
        <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-5 sm:p-6 flex gap-4 items-start">
            <div className="shrink-0">{icon}</div>
            <div>
                <div className="text-base font-semibold text-slate-900">{title}</div>
                <div className="mt-1 text-sm text-slate-600 space-y-0.5">
                    {lines.map((l, i) => <div key={i}>{l}</div>)}
                </div>
            </div>
        </div>
    );
}

function FaqItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="rounded-2xl bg-white ring-1 ring-slate-200">
            <button
                onClick={() => setOpen((v) => !v)}
                className="w-full text-left px-5 py-4 flex items-center justify-between"
            >
                <span className="font-medium text-slate-900">{q}</span>
                <span className="text-slate-500">{open ? "–" : "+"}</span>
            </button>
            {open && <div className="px-5 pb-5 text-sm text-slate-600">{a}</div>}
        </div>
    );
}
