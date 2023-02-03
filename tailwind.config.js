/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./*.html"],
  theme: {
    extend: {
      screens:{
        "sm":"480px",
        '2xl': '1654px',
        "rsm":"360px"
      },
      spacing:{
        "big":"40rem",
        "hh":"30rem",
      },
      borderRadius:{
        "lrg":"30%"
      },
      height:{
        "1/20":"5%",
        "1/15":"5%"
      },
      width:{
        "1/20":"3%",
        "1/15":"5%"
      }
    },
    fontFamily:{
      nunito:['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}
