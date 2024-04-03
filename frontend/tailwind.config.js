/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,
      // or have default horizontal padding
      padding: '4rem',

      // default breakpoints but with 40px removed
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
      // screens: {
      //   sm: '576px',
      //   md: '768px',
      //   lg: '992px',
      //   xl: '120px',
      //   "2xl": '1400px'
      // },
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
