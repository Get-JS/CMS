import tw from 'twin.macro';

const circle = tw`w-[246px] h-[246px] border-radius[50%] absolute`;

const Home = () => {
  return (
    <>
      {/* 뱃찌 */}
      <div
        tw="bg-yellow-400 w-[56px] h-[56px] text-secondary ml-[24px] pl-[13px] pt-[18px] text-[9px] leading-[11px] font-bold
      fixed top-0 right-[24px]"
      >
        Ex- <br />
        publ
      </div>

      {/* 텍스트 영역 */}
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
        <p>
          We’ll make a mobile magazine
          <br />
          using html, css only.
        </p>
      </div>

      {/* 원 */}
      <div tw="relative ml-[24px] mt-[42px] h-[246px]">
        <div css={circle} tw="bg-transparent border-[1px] border-solid border-[rgba(0, 0, 0, 0.2)]" />
        <div css={circle} tw="bg-yellow-400 left-[82px]" />
        <div css={circle} tw="bg-yellow-300 left-[164px] top-0" />
      </div>
    </>
  );
};

export default Home;
