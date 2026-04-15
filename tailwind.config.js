/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#14588F',
          dark: '#0f4270',
        },
        plum: {
          DEFAULT: '#713659',
          dark: '#5a2a47',
          light: '#8a4a6e',
        },
        charcoal: '#1E1F1F',
        silver: '#D2DADE',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.15' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
      },
    },
  },
  plugins: [],
}
