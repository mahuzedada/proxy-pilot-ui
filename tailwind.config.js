/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        'full-50': 'calc(100% - 50px)',
      },
    },
  },
  plugins: [],
};
