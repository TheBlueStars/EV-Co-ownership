/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: { center: true, padding: "1rem", screens: { lg: "1120px" } },
    extend: {
      colors: {
        primary: { DEFAULT: "#0EA5E9" },        // blue-500
        accent: { DEFAULT: "#10B981" },         // emerald-500
        dark:   "#0f172a",                      // slate-900
        muted:  "#64748b",                      // slate-500
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.08)",
      },
      borderRadius: {
        xl2: "1rem",
      },
      backgroundImage: {
        "btn-grad": "linear-gradient(90deg,#1D4ED8 0%,#0EA5E9 100%)",
        "hero-fade": "linear-gradient(180deg,rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 85%)",
      },
    },
  },
  plugins: [],
};
