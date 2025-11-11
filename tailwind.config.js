/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    container: { center: true, padding: "1rem", screens: { lg: "1120px" } },
    extend: {
      colors: {
        brandBlue: "#1e90ff",
      },
      backgroundImage: {
        heroFade: "linear-gradient(180deg,rgba(255,255,255,0) 0%, rgba(255,255,255,.96) 85%)",
      },
      boxShadow: { soft: "0 20px 60px rgba(2,6,23,.06)" },
    },
  },
  // v4 không cần content/ purge
  plugins: [],
};
