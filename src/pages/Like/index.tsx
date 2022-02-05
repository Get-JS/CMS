import likes1Img from '@/assets/images/likes-1.jpg';
import likes2Img from '@/assets/images/likes-2.jpg';
import likes3Img from '@/assets/images/likes-3.jpg';
import likes4Img from '@/assets/images/likes-4.jpg';
import BaseLayout from '@/layouts/BaseLayout';

import searchImg from '@assets/images/icon/search.svg';

const Like = () => {
  return (
    <BaseLayout>
      <div tw="m-[20px] relative animate-slide-down animation-delay[0.25s]">
        <form tw="flex">
          <img tw="absolute left-[12px] top-[12px] opacity-[0.3]" src={searchImg} alt="" />
          <input
            className="peer"
            tw="
            bg-[rgba(255, 255, 255, 0.08)] h-[40px] border-none border-radius[8px] font-size[14px] text-white text-center
            focus:outline-[none] focus:bg-[rgba(255, 255, 255, 0.12)]
            placeholder:text-[rgba(255, 255, 255, 0.3)] placeholder:text-center
            w-full flex-shrink-0 transition[0.5s] duration-500 focus:flex-shrink-[initial] 
            "
            placeholder="Search"
            type="text"
          />
          <button
            tw="bg-transparent border-none outline-[none] font-size[15px] flex-shrink-0 ml-[20px] opacity-0 transition[0.2s] peer-focus:opacity-100"
            type="button"
          >
            취소
          </button>
        </form>
      </div>

      <div tw="m-[24px] mt-[124px] mb-[12px]">
        <h1 tw="animate-fade-in-up-aqua">Likes 72</h1>
        <div tw="mt-[12px] animate-fade-in-up-aqua">
          We’ll make a mobile magazine app
          <br />
          using html, css only.
        </div>
      </div>

      <ul tw="grid grid-template-columns[1fr 1fr] grid-auto-rows[148px] grid-column-gap[17px] grid-row-gap[18px] p-[24px]">
        <li tw="h-auto border-radius[5px] animate-fade-in-up-aqua">
          <img tw="object-cover object-center w-full h-[148px]" src={likes1Img} alt="" />
        </li>
        <li tw="border-radius[5px] animate-fade-in-up-aqua">
          <img tw="object-cover object-center w-full h-[148px]" src={likes2Img} alt="" />
        </li>
        <li tw="border-radius[5px] animate-fade-in-up-aqua">
          <img tw="object-cover object-center w-full h-[148px]" src={likes3Img} alt="" />
        </li>
        <li tw="border-radius[5px] animate-fade-in-up-aqua">
          <img tw="object-cover object-center w-full h-[148px]" src={likes4Img} alt="" />
        </li>
        <li tw="border-radius[5px] animate-fade-in-up-aqua">
          <img tw="object-cover object-center w-full h-[148px]" src={likes1Img} alt="" />
        </li>
        <li tw="border-radius[5px] animate-fade-in-up-aqua">
          <img tw="object-cover object-center w-full h-[148px]" src={likes2Img} alt="" />
        </li>
      </ul>
    </BaseLayout>
  );
};

export default Like;
