/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'global-white': '#F1F0EE',
        'global-green' : '#1DD1A1',
        'primary-blue': '#1255DD',
        'global-brown' :'#E2D9C8',
        'primary-brown' : '#30261C',

      },
      scrollPadding: {
        '1.5': '0.3rem',
      },
      backgroundImage: {
        'hero': "url('https://ik.imagekit.io/2akrvp545/pexels-chevanon-photography-302899.jpg?updatedAt=1701004125647')",
        'sub' : "url('https://ik.imagekit.io/2akrvp545/coffeebeans.png?updatedAt=1702813526853')"gitgit
      }
    },
  },
  plugins: [],
}