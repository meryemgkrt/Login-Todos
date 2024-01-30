/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx, ts, tsx}',
    './src/screen/**/*.{js, jsx, ts, tsx}',
    './src/components/**/*.{js, jsx, ts, tsx}',
    './src/navigation/**/*.{js, jsx, ts, tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#343a40',
        secondary: '#868e96',
        main: '#3b5bdb',
        border: '#cfcfcf',
      },
    },
  },
  plugins: [],
};
