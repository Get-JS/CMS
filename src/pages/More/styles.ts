import { keyframes } from '@emotion/react';
import tw, { css } from 'twin.macro';

const badgeShow = keyframes`
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;
const animationBadgeShow = css`
  animation: ${badgeShow} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  animation-delay: 0.5s;
`;
export const badge = css`
  ${animationBadgeShow}
  ${tw`w-[28px] h-[28px] font-size[12px] background-color[#ff5500] border-radius[50%] flex justify-center items-center`}
`;
