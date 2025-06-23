/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        quattro: ['"Quattrocento Sans"', 'sans-serif'],
        notoSerif: ['"Noto Serif"', 'serif'],
        matangi: ['"Matangi"', 'serif'],
        notoJP: ['"Noto Sans JP"', 'sans-serif'],
        barlow: ['"Barlow Condensed"', 'sans-serif'],
        abel: ['"abel"', 'sans-serif']
      },
    },
  },
  plugins: [],
}