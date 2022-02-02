import BaseLayout from '@/layouts/BaseLayout';

import { animationSlideDown, circle, line } from './styles';

const Home = () => {
  return (
    <BaseLayout>
      <div
        css={animationSlideDown}
        tw="bg-yellow-400 w-[56px] h-[56px] text-secondary ml-[24px] pl-[13px] pt-[18px] text-[9px] leading-[11px] font-bold fixed top-0 right-[24px]"
      >
        Ex- <br />
        publ
      </div>

      <div tw="mt-[90px] ml-[24px]">
        <h1 tw="mb-[22px]">
          <div tw="mb-[85px] animate-fade-in-up-aqua animation-delay[0.07s]">vol. 4</div>

          <div>
            <div tw="animate-fade-in-up-aqua animation-delay[0.14s]">
              Classics <div css={line} tw="relative top-[-7px]" />
            </div>
            <div tw="animate-fade-in-up-aqua animation-delay[0.21s]">never</div>
            <div tw="animate-fade-in-up-aqua animation-delay[0.28s]">get old</div>
          </div>
        </h1>

        <p tw="animate-fade-in-up-aqua animation-delay[0.35s]">
          We’ll make a mobile magazine
          <br />
          using html, css only.
        </p>
      </div>

      <div tw="relative ml-[24px] mt-[42px] h-[246px]">
        <div
          css={circle}
          tw="bg-transparent border-[1px] border-solid border-[rgba(0, 0, 0, 0.2)] absolute animation-delay[0.1s]"
        />
        <div css={circle} tw="bg-yellow-400 absolute left-[82px] animation-delay[0.2s]" />
        <div css={circle} tw="bg-yellow-300 absolute left-[164px] animation-delay[0.3s]" />
      </div>
    </BaseLayout>
  );
};

export default Home;
