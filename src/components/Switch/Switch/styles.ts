import tw, { css, theme } from 'twin.macro';

import { size } from '../@types/types';

export const switchClassName = {
  handle: 'switch--handle',
  disable: 'switch--disabled',
};

export const sizeVariant = {
  [size.MD]: {
    switch: {
      height: '38px',
      width: '74px',
    },
    checked: tw`translate-x-9`,
    icon: {
      height: '25px',
      width: '25px',
    },
    handle: {
      height: '34px',
      width: '34px',
    },
  },
  [size.SM]: {
    switch: {
      height: '30px',
      width: '57px',
    },
    checked: tw`translate-x-7`,
    icon: {
      height: '20px',
      width: '20px',
    },
    handle: {
      height: '26px',
      width: '26px',
    },
  },
  [size.XS]: {
    switch: {
      height: '20px',
      width: '36px',
    },
    checked: tw`translate-x-4`,
    icon: {
      height: '13px',
      width: '13px',
    },
    handle: {
      height: '16px',
      width: '16px',
    },
  },
};

export const activeRingStyle = css`
  &:focus:not(:disabled) > .${switchClassName.handle} {
    box-shadow: ${theme`shadow.focus`};
  }

  &:hover:not(:disabled):not(:checked) > .${switchClassName.handle} {
    box-shadow: ${theme`shadow.focus`};
  }
`;

export const disabledStyle = css`
  &:disabled,
  &.${switchClassName.disable} {
    background-color: ${theme`colors.disabled`};
    border-color: ${theme`colors.disabled`};
    box-shadow: none;
    color: ${theme`textColor.disabled`};
    cursor: not-allowed;
  }
`;
