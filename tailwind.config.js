/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          1: '#64ffda',
          2: '#85d6ab',
          3: '#77c099',
        },
        white: {
          1: '#e6f1ff',
          2: '#FFFFFF',
        },
        slate: {
          1: '#8892b0',
          2: '#a8b2d1',
          3: '#ccd6f6',
        },
        navy: {
          1: '#0a192f',
          2: '#112240',
          3: '#233554',
        },
      },
      fontFamily: {
        'fira-code': ['Fira Code', 'sans-serif'],
      },
      keyframes: {
        slideIn: {
          '0%': { right: '-575px' },
          '100%': { right: '0' },
        },
        slideOut: {
          '0%': { right: '0' },
          '100%': { right: '-575px' },
        },
      },
      animation: {
        'slide-in': 'slideIn 300ms ease-in-out',
        'slide-out': 'slideOut 300ms ease-in-out',
      },
    },
  },
  plugins: [],
}
