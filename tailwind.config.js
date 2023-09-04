/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily:{
        "work":"'Work Sans', sans-serif",
        "nunito":"'Nunito', sans-serif"
      }, colors: {
        primary:{
          "500":"#333333",
        },
        accents:{
          "400":"#FFADAD",
          "600":"#E2445C"
        },
        neutral:{
          "100":"#FFFFFF",
          "200":"#FEDADA",
          "300":"#C4C4C4"
        }
      }
    },
  },
  plugins: [],
}
