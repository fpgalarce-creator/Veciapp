/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0F172A",
          muted: "#1E293B",
        },
        primary: "#22C55E",
        "primary-dark": "#16A34A",
        highlight: "#FACC15",
        surface: "#F1F5F9",
        muted: "#CBD5E1",
        text: "#0B1224",
        offwhite: "#FFFFFF",
      },
      boxShadow: {
        soft: "0 10px 35px rgba(0,0,0,0.06)",
        glow: "0 15px 50px rgba(34, 197, 94, 0.25)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 20% 20%, rgba(34,197,94,0.08), transparent 30%), radial-gradient(circle at 80% 10%, rgba(250,204,21,0.06), transparent 28%), radial-gradient(circle at 50% 70%, rgba(15,23,42,0.4), rgba(15,23,42,0.95))",
      },
    },
  },
  plugins: [],
};
