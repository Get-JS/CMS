import accountSvg from '@/assets/images/icon/account.svg';
import bookmarkSvg from '@/assets/images/icon/bookmark.svg';
import businessSvg from '@/assets/images/icon/business.svg';
import puzzleSvg from '@/assets/images/icon/puzzle.svg';
import userThumbImg from '@/assets/images/user-thumb.png';
import BaseLayout from '@/layouts/BaseLayout';

import { badge } from './styles';

const More = () => {
  return (
    <BaseLayout>
      <div tw="text-center mt-[75px]">
        <div tw="relative inline-block mb-[36px] animate-fade-in-up-aqua animation-delay[0.07s]">
          <img
            tw="w-[92px] h-[92px] border-radius[50%] box-shadow[0 6px 12px 0 rgba(0, 0, 0, 0.1), 0 12px 24px 0 rgba(0, 0, 0, 0.24)]"
            src={userThumbImg}
            alt=""
          />
          <div css={badge} tw="absolute top-0 right-[-8px]">
            7
          </div>
        </div>

        <div>
          <h2 tw="mb-[10px] animate-fade-in-up-aqua animation-delay[0.07s]">Hi, Mary Jane</h2>
          <div tw="animate-fade-in-up-aqua animation-delay[0.14s]">
            We’ll make a mobile magazine <br />
            using html, css only.
          </div>
        </div>

        <div tw="p-[8px 22px 10px 22px] background-color[rgba(0, 0, 0, 0.05)] inline-block border-radius[20px] box-shadow[inset 0 0 0 1px rgba(0, 0, 0, 0.08)] mt-[18px] animate-fade-in-up-aqua animation-delay[0.07s]">
          <a href="mailto:yjkwon9073@naver.com">yjkwon9073@naver.com</a>
        </div>
      </div>

      <ul tw="mt-[48px]">
        <li tw="flex justify-between items-center border-bottom[1px solid rgba(0, 0, 0, 0.08)] font-size[15px] animate-fade-in-up-aqua animation-delay[0.07s]">
          <div tw="flex items-center">
            <img tw="p-[20px 20px]" src={bookmarkSvg} alt="" />
            <div tw="ml-[6px]">Bookmark</div>
          </div>
          <div tw="opacity-[0.5]">
            <img tw="pr-[14px]" src="" alt="" />
          </div>
        </li>

        <li tw="flex justify-between items-center border-bottom[1px solid rgba(0, 0, 0, 0.08)] font-size[15px] animate-fade-in-up-aqua animation-delay[0.14s]">
          <div tw="flex items-center">
            <img tw="p-[20px 20px]" src={accountSvg} alt="" />
            <div tw="ml-[6px]">Account Info</div>
          </div>
          <div tw="opacity-[0.5]">
            <img tw="pr-[14px]" src="" alt="" />
          </div>
        </li>

        <li tw="flex justify-between items-center border-bottom[1px solid rgba(0, 0, 0, 0.08)] font-size[15px] animate-fade-in-up-aqua animation-delay[0.21s]">
          <div tw="flex items-center">
            <img tw="p-[20px 20px]" src={businessSvg} alt="" />
            <div tw="ml-[6px]">Business</div>
          </div>
          <div tw="opacity-[0.5]">
            <img tw="pr-[14px]" src="" alt="" />
          </div>
        </li>

        <li tw="flex justify-between items-center border-bottom[1px solid rgba(0, 0, 0, 0.08)] font-size[15px] animate-fade-in-up-aqua animation-delay[0.28s]">
          <div tw="flex items-center">
            <img tw="p-[20px 20px]" src={puzzleSvg} alt="" />
            <div tw="ml-[6px]">Blah Blah</div>
          </div>
          <div tw="opacity-[0.5]">
            <img tw="pr-[14px]" src="" alt="" />
          </div>
        </li>
      </ul>
    </BaseLayout>
  );
};

export default More;
