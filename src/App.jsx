// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";
import Home from "./pages/public/trangchu/Home.jsx";

export default function App(){
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main><Routes><Route path="/" element={<Home/>} /></Routes></main>
      <Footer />
    </div>
  );
}
