/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f4976c',
        yellow: {
          500: '#fbe8a6'
        },
        orange: {
          500: '#f4976c'
        },
        darkBlue: '#303c6c',
        'dark-blue': '#303c6c',
        slateBlue: '#b4dfe5',
        skyBlue: '#d2fdff'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

