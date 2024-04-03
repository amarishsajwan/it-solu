/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      boxSizing: ["responsive", "border-box"],
      colors: {
        "black-pearl": "#121820",
        "gray-c": "#e7e7e8",
      },
    },
  },
  plugins: [],
};
