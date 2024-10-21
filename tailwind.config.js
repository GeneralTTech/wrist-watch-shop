/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#111111',
        deeporange: '#DFBE00',
        secondary: '#A67314',
        graylike: '#110F0F'
      },
      colors: {
        primary: '#A67314',
        redd: '#FC0012',
        secondary: '#2D2C2C',
        orangeyellow: '#FF9729',
      },
      borderColor: {
        primary: '#3D3D3D',
        secondary: '#A67314',
        pro: '#E8E8E8'
      },
      
    },
  },
  plugins: [],
}

