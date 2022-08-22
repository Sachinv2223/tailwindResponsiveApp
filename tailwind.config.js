/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Calistoga': ['Calistoga'],
        'Poppins': ['Poppins'],
      },
      colors:{
        // "bBlue":"#257bbe",
        // "bBlue-light":"#3d95d9",
        // "bBlue-dark":"#1d5f93",
        "bBrown":"#a98f71",
        bBlue:{
          light:"#3d95d9",
          DEFAULT:"#257bbe",
          dark:"#1d5f93"
        }
      }
    },
  },
  plugins: [],
}
