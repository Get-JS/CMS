import { css } from '@emotion/react';
import tw, { styled, theme } from 'twin.macro';

import { BaseButtonProps, size, variant } from '../@types/types';

export const sizeVariantStyle = {
  [size.MD]: {
    height: '48px',
    padding: '0 24px',
  },
  [size.SM]: {
    height: '32px',
    padding: '0 16px',
  },
  [size.XS]: {
    height: '20px',
    fontSize: '12px',
    padding: '0 8px',
  },
};

export const styleVariantStyle = {
  [variant.PRIMARY]: {
    backgroundColor: theme`colors.primary`,
    color: theme`textColor.primary`,
  },
  [variant.SECONDARY]: {
    backgroundColor: theme`colors.transparent`,
    border: '2px solid',
    borderColor: theme`colors.primary`,
    boxShadow: 'none',
    color: theme`colors.primary`,
    ':disabled': {
      backgroundColor: theme`colors.transparent`,
    },
  },
  [variant.TERTIARY]: {
    backgroundColor: theme`colors.tertiary`,
    boxShadow: 'none',
    color: theme`colors.primary`,
  },
  [variant.SUBTLE]: {
    backgroundColor: theme`colors.subtle`,
    color: 'white',
  },
  [variant.DANGER]: {
    backgroundColor: theme`colors.danger`,
    color: 'white',
  },
  [variant.SUCCESS]: {
    backgroundColor: theme`colors.success`,
    color: 'white',
  },
  [variant.TEXT]: {
    backgroundColor: theme`colors.transparent`,
    color: theme`colors.primary`,
    boxShadow: 'none',
  },
};

export const disabledStyle = ({ isLoading }: BaseButtonProps) => {
  if (isLoading === true) {
    return `
      &:disabled {
        cursor: not-allowed;
      }
    `;
  }

  return `
    &:disabled {
      background-color: ${theme`colors.disabled`};
      border-color: ${theme`colors.disabled`};
      box-shadow: none;
      color: ${theme`textColor.disabled`};
      cursor: not-allowed;
    }
  `;
};

export const opacityStyle = ({ isLoading = false }: BaseButtonProps) => {
  return isLoading ? '.5' : '1';
};

export const StyledButton = styled.button(({ isRound, isLoading, size, variant }: BaseButtonProps) => [
  tw`font-size[14px] font-weight[600] letter-spacing[0.03em] line-height[18px]`,
  tw`inline-flex items-center justify-center`,
  tw`border-0`,
  isRound && tw`border-radius[16px]`,
  tw`padding[10px 15px]`,
  tw`min-h-[38px]`,

  tw`focus:outline-none`,

  css`
    transition: background-color 0.2s, opacity 0.2s;

    &:hover:not(:disabled):not(:active) {
      opacity: 0.65;
    }

    opacity: ${opacityStyle({ isLoading })};

    ${disabledStyle({ isLoading })}
    ${size && sizeVariantStyle[size]}
    ${variant && styleVariantStyle[variant]}
  `,
]);
