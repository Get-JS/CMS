export const base = {
  '--primary': '#485861',
  '--secondary': '#394952',
  '--tertiary': '#EFF4F5',
  '--disabled': '#E9EAEB',
  '--text-primary': '#ffe6cf',
  '--text-secondary': '#485861',
  '--text-disabled': '#BDC2C4',
};

export const light = {};

export const dark = {};

export const colorClassName = {
  base: ':root',
  light: 'theme-light',
  dark: 'theme-dark',
};

export const colorStyle = {
  [colorClassName.base]: base,
  [`.${colorClassName.light}`]: light,
  [`.${colorClassName.dark}`]: dark,
};
