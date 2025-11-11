import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";

import Home from "./pages/public/trangchu/Home.jsx";
import Features from "./pages/public/tinhnang/Features.jsx";
import AboutCoOwnership from "./pages/public/vechungsohuu/AboutCoOwnership.jsx";
import Contact from "./pages/public/lienhe/Contact.jsx";

import Register from "./pages/public/dangky/Register.jsx";
import Login from "./pages/public/dangnhap/Login.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tinhnang" element={<Features />} />
          <Route path="/vechungsohuu" element={<AboutCoOwnership />} />
          <Route path="/lienhe" element={<Contact />} />
          <Route path="/dangnhap" element={<Login />} />
          <Route path="/dangky" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
