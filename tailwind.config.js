/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#181818',
        'yellow': '#ffc43b'
      },
    },
  },
  plugins: [],
}
