/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      scrollPadding: {
        '1.5': '0.3rem',
      },
    },
  },
  plugins: [],
}