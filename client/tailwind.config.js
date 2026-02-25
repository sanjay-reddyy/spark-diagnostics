/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0EA5A4",      // medical teal
        secondary: "#2563EB",    // medical blue
        accent: "#E0F7FA",
        background: "#F8FAFC",
        darkText: "#0F172A",
        lightText: "#64748B",
      },
      fontFamily: {
        heading: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};
