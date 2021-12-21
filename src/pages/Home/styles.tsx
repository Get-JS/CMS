import { FC } from 'react';

import 'twin.macro';

export const Badge: FC = ({ children }) => {
  return (
    <div
      tw="bg-yellow-400 w-[56px] h-[56px] text-secondary ml-[24px] pl-[13px] pt-[18px] text-[9px] leading-[11px] font-bold
      fixed top-0 right-[24px]"
    >
      {children}
    </div>
  );
};

export const TextZone: FC = () => {
  return (
    <div tw="mt-[90px] ml-[24px]">
      <h1 tw="mb-[22px]">
        <div tw="mb-[85px]">vol. 4</div>
        <div>
          <div>
            Classics <div tw="w-[46px] h-[1px] inline-block relative top-[-7px] bg-yellow-200 opacity-20" />
          </div>
          <div>never</div>
          <div>get old</div>
        </div>
      </h1>
      <p className="desc stagger-item">
        We’ll make a mobile magazine
        <br />
        using html, css only.
      </p>
    </div>
  );
};
