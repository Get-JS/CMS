module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#485861',
        secondary: '#394952',
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
      keyframes: {
        'fade-in-up-aqua': {
          from: {
            opacity: 0,
            transform: 'translateY(20px)',
            color: 'aqua',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-up-aqua': 'fade-in-up-aqua 0.5s both',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
