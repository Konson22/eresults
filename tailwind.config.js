/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'rgb(14,158,99)',
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}
