import { keyframes } from '@emotion/react';
import tw, { css } from 'twin.macro';

const circleShow = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px) scale(0.5);
    background-color: aqua;
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;
const animationCircleShow = css`
  animation: ${circleShow} 1s cubic-bezier(0.19, 1, 0.22, 1) both;
`;
export const circle = css`
  ${animationCircleShow}
  ${tw`w-[246px] h-[246px] border-radius[50%]`}
`;

export const line = tw`w-[46px] h-[1px] inline-block bg-yellow-200 opacity-20`;

const slideDown = keyframes`
  from {
    transform: translateY(-60px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;
export const animationSlideDown = css`
  animation: ${slideDown} 0.5s both;
`;
