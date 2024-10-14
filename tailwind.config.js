/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: 'Oswald, ui-serif',
        agustina: ['"Agustina Regular"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        fontSize: {
          '0.8rem': '2rem',
        },
      },
      fontSize: {
        '230px': '30px',
      },
      spacing: {
        '50px': '50px',
      },

    },
  },
  plugins: [],
}

