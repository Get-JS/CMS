import { Link } from 'react-router-dom';

import backgroundImg from '@/assets/images/issue-1.jpg';
import issue1Img from '@/assets/images/issue-2.jpg';
import issue2Img from '@/assets/images/issue-3.jpg';
import issue3Img from '@/assets/images/issue-4.jpg';
import BaseLayout from '@/layouts/BaseLayout';

import { issueList } from './config';

const Issue = () => {
  return (
    <BaseLayout>
      <div css={{ backgroundImage: `url(${backgroundImg})` }} tw="h-[310px] bg-black relative bg-cover">
        <h1 tw="absolute top-[30px] right-[26px]">8</h1>
        <div tw="absolute bottom-[36px] left-[24px]">
          <h1 tw="mb-[12px] animate-fade-in-up-aqua animation-delay[0.07s]">
            Issues <sup tw="font-size[10px]">1</sup>
          </h1>
          <p tw="animate-fade-in-up-aqua animation-delay[0.14s]">
            We’ll make a mobile magazine <br />
            using html, css only.
          </p>
        </div>
      </div>

      <ul tw="flex overflow-x-scroll p-[24px] pb-[7px]">
        <li tw="mr-[10px] animate-fade-in-left animation-delay[0.07s]">
          <img tw="w-[136px] h-[80px] object-cover object-center border-radius[5px]" src={issue1Img} alt="" />
        </li>
        <li tw="mr-[10px] animate-fade-in-left animation-delay[0.14s]">
          <img tw="w-[136px] h-[80px] object-cover object-center border-radius[5px]" src={issue2Img} alt="" />
        </li>
        <li tw="mr-[10px] animate-fade-in-left animation-delay[0.21s]">
          <img tw="w-[136px] h-[80px] object-cover object-center border-radius[5px]" src={issue3Img} alt="" />
        </li>
      </ul>

      <ul>
        {issueList.map((issue) => (
          <li
            key={issue.id}
            tw="p-[17px 24px 20px 24px] border-bottom[1px solid rgba(0, 0, 0, 0.08)] relative animate-fade-in-up-aqua"
          >
            <Link to="/" tw="flex items-center">
              <div tw="w-[26px] h-[26px] bg-yellow-200 text-[#485762] border-radius[50%] p-[5px 10px] mr-[20px]">
                {issue.id}
              </div>
              <div>
                <div tw="font-size[17px]">{issue.title}</div>
                <div tw="font-size[13px] opacity-[0.7]">{issue.desc}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </BaseLayout>
  );
};

export default Issue;
