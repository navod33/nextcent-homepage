/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'xs': '9.74px',
      'sm': '26px',
       'base': '45px',
       'lg': '45px',
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        Roboto: ['roboto', 'sans-serif'],
        'display': ['roboto', 'sans-serif'],
        'body': ['roboto', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "green": "4CAF4F",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}