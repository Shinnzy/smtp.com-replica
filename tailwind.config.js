/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'global-blue': '#0C2461',
        'global-green' : '#1DD1A1',
        'primary-blue': '#1255DD'
      },
      scrollPadding: {
        '1.5': '0.3rem',
      },
    },
  },
  plugins: [],
}