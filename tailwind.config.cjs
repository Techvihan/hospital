/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'default': '0 2px 0 #000',
        'md': '0 2px 2px #000',
        'h2': '0 0 3px #FF0000, 0 0 5px #0000FF',
        'h1': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
      },
      backgroundImage: {
        'hero-hospital': "url('/hospital.jpg')",
        'hero-home': "url('/home.jpg')"
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('@tailwindcss/aspect-ratio')
  ]
}
