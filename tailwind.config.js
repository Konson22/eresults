/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'rgb(119,184,30)',
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}
