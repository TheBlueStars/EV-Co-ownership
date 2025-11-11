/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { lg: "1120px" } },
    extend: {
      colors: { brand: "#06B6D4", leaf: "#10B981" },
      boxShadow: { soft: "0 12px 40px rgba(2,6,23,.08)" },
      backgroundImage: {
        "btn-grad": "linear-gradient(90deg,#1D4ED8 0%,#0EA5E9 100%)",
        "hero-fade": "linear-gradient(180deg,rgba(255,255,255,0) 0%, rgba(255,255,255,0.96) 85%)",
      },
    },
  },
  plugins: [],
};
