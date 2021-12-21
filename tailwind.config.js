module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#bdcdd6',
        yellow: {
          200: '#ffe6cf',
          300: '#fedd15',
          400: '#ffc000',
        },
      },
      textColor: {
        primary: '#ffe6cf',
        secondary: '#485861',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
