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
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        blink: {
          'from': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
          'to': { borderColor: 'transparent' }
        },
        'card-left': {
          '0%': { 
            opacity: '0',
            transform: 'translate(-600px, -600px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translate(0, 0)'
          }
        },
        'card-right': {
          '0%': { 
            opacity: '0',
            transform: 'translate(600px, -600px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translate(0, 0)'
          }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay-1': 'float 6s ease-in-out 1.5s infinite',
        'float-delay-2': 'float 6s ease-in-out 3s infinite',
        'float-delay-3': 'float 6s ease-in-out 4.5s infinite',
        'float-delay-4': 'float 6s ease-in-out 6s infinite',
        'typing': 'typing 2s steps(8)',
        'cursor': 'blink 1s infinite',
        'card-left': 'card-left 1s ease-out forwards',
        'card-right': 'card-right 1s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
      }
    },
  },
  plugins: [
    import('@tailwindcss/forms'),
  ],
}

