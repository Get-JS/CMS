import { css, keyframes } from '@emotion/react';

const alertScaleUp = keyframes`
  0% {
    transform: scale(.7);
  }

  45% {
    transform: scale(1.05);
  }

  80% {
    transform: scale(.95);
  }

  100% {
    transform: scale(1);
  }
`;

export const alertShow = css`
  animation: ${alertScaleUp} 0.3s;
`;

export const alertHide = css`
  transition: all 0.3s ease-in;
  transform: scale(0.5);
  opacity: 0;
  visibility: hidden;
`;
