/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        "xs": '380px',
      },
      colors: {
        primary: '#E14842',
        secondary: '#1e1e1e',
      },
      backgroundImage: {
        'hero-bg': "url('/src/assets/gradient-bg.jpeg')",
        'hero-bg-mobile': "url('/src/assets/bgMobile.png')",
      },
      fontFamily: {
        reyka: ['Reyka FREE', 'sans-serif'],
      },
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        wave: {
          '0%': {
            transform: 'scale(0)',
            filter: 'hue-rotate(90deg) blur(100px)',
          },
          '25%': {
            transform: 'scale(0)',
            filter: 'hue-rotate(120deg) blur(50px)',
          },
          '50%': {
            transform: 'scale(1)',
            filter: 'hue-rotate(180deg) blur(25px)',
          },
          '75%': {
            transform: 'scale(0)',
            filter: 'hue-rotate(360deg) blur(2px)',
          },
          '100%': {
            transform: 'scale(0)',
            filter: 'hue-rotate(0deg) blur(0)',
          },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.5s forwards',
        'slide-in-right': 'slide-in-right 0.5s forwards',
        wave: 'wave 1.5s linear infinite',
      },
      
    },
  },
  plugins: [],
}

