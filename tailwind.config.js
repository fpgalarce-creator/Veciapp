/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#10B981",
        secondary: "#2563EB",
        accent: "#FBBF24",
        background: "#F3F4F6",
        text: "#111827",
      },
      boxShadow: {
        soft: "0 10px 35px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
