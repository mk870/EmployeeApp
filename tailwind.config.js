/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:"rgba(38, 37, 190, 1)"
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    },
  },
  plugins: [],
}
