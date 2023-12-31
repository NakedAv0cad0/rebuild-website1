/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#10cab7",
        secondary: "#2c4755",
        text: "#94a3b8",
      },
    },
    fontFamily: {
      sans: ["Work Sans", "sans-serif"],
    },
  },
  plugins: [],
};
