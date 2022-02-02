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
        'fade-in-right': {
          from: {
            opacity: 0,
            transform: 'translateX(30px) scaleX(1.1)',
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'fade-in-up-aqua': 'fade-in-up-aqua 0.5s both',
        'fade-in-right': 'fade-in-right 1s cubic-bezier(0.19, 1, 0.22, 1) both',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
