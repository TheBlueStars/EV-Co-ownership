import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar.jsx";
import Footer from "../components/common/Footer.jsx";

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-800">
      {/* HEADER */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
