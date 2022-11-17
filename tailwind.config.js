/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    container:{
      center : true,
      screens: {
        xl: "1170px"
      },
    },
    extend: {
      colors:{
        "myBlue" : "#217BF4" 
      },
      fontFamily: {
        'inter': ['Inter', "sans-serif"],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}