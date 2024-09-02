/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.{html,js,vue}"],
  theme: {
    extend: {},
    screens: {
      'phone': {'max': '425px'},
      'myphone': {'max': '415px'}
    },
  },
  plugins: [],
}