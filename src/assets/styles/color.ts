export const base = {
  '--primary': '#485861',
  '--secondary': '#394952',
  '--tertiary': '#EFF4F5',
  '--disabled': '#E9EA EB',
  '--text-primary': '#ffe6cf',
  '--text-secondary': '#485861',
  '--text-disabled': '#BDC2C4',
};

export const light = {
  '--primary': '#485861',
  '--text': '#313131',
};

export const dark = {
  '--primary': '#313131',
  '--text': '#313131',
};

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
