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
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.5s forwards',
        'slide-in-right': 'slide-in-right 0.5s forwards',
      },
    },
  },
  plugins: [],
}

