/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      colors: {
        cafe: {
          bg1: 'var(--bg1)',
          bg2: 'var(--bg2)',
          ink: 'var(--ink)',
          soft: 'var(--soft)',
          gold: 'var(--gold)',
        },
      },
    },
  },
  plugins: [],
};
