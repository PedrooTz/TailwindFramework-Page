/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaria: '#F3CC4D',
        secundaria: '#2E1012',
        font: '#000000'
    },
    fontFamily: {
      fonte: ['Indie Flower', 'cursive'],
  },
  plugins: [],
}

  }
}