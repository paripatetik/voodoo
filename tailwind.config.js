/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'space': ['Space Grotesk'],
        'inter': ['Inter'],
        'space-mono': ['Space Mono'],
      },
     colors:{
      'grey': "rgba(255, 255, 255, 0.50)"
     }
    },
  },
  plugins: [],
}

