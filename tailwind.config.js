/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#485861',
        secondary: '#394952',
        danger: '#ED4B9E',
        success: '#31D0AA',
        warning: '#FFB237',
        tertiary: '#EFF4F5',
        subtle: '#7A6EAA',
        disabled: '#E9EAEB',
        yellow: {
          200: '#ffe6cf',
          300: '#fedd15',
          400: '#ffc000',
        },
      },
      textColor: {
        primary: '#ffe6cf',
        secondary: '#485861',
        disabled: '#BDC2C4',
      },
      keyframes: {
        'slide-down': {
          from: {
            transform: 'translateY(-60px)',
            opacity: 0,
          },
          to: {
            transform: 'translateY(0px)',
            opacity: 1,
          },
        },
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
        'fade-in-left': {
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
        'slide-down': 'slide-down 0.5s both',
        'fade-in-up-aqua': 'fade-in-up-aqua 0.5s both',
        'fade-in-left': 'fade-in-left 1s cubic-bezier(0.19, 1, 0.22, 1) both',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addBase, addComponents, addUtilities, theme }) => {
      addBase({});
      addComponents({
        '.example': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.xl'),
        },
      });
      addUtilities({
        '.z-overlay': {
          zIndex: 19,
        },
        '.z-modal': {
          zIndex: 20,
        },
      });
    }),
  ],
};
