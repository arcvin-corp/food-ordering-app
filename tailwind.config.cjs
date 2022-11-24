/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        black: '#222831',
        grey: '#393E46',
        teal: '#00ADB5',
        space: '#EEEEEE',
      },
    },
  },
  plugins: [],
};
