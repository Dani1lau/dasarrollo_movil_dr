/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App/**/*{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#161622',
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "Sans-serif"],
        pextralight: ["Poppins-Extralight", "Sans-serif"],
        plight: ["Poppins-Light", "Sans-serif"],
        pregular: ["Poppins-Regular", "Sans-serif"],
        pmedium: ["Poppins-Medium", "Sans-serif"],
        psemibold: ["Poppins-SemiBold", "Sans-serif"],
        pbold: ["Poppins-Bold", "Sans-serif"],
        pextrabold: ["Poppins-Extrabold", "Sans-serif"],
        pblack: ["Poppins-Black", "Sans-serif"],
      }
    },
  },
  plugins: [],
}

