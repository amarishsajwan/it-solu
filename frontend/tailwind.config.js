/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxSizing: ["responsive", "border-box"],
      colors: {
        "black-pearl": "#121820",
      },
    },
  },
  plugins: [],
};
