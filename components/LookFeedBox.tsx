"use client";
import Image from "next/image";
import HeartActive from "/public/icon/heart_active.svg";
import HeartInactive from "/public/icon/heart_inactive.svg";

import { useState } from "react";

const LookFeedProductBox = () => {
  const [heart, setHeart] = useState(false);

  return (
    <div className="flex w-[270px] h-20 gap-2 items-center justify-start">
      <div className="w-[60px] h-full flex-shrink-0 relative">
        <Image
          layout="fill"
          objectFit="cover"
          src={"/img/item1.jpeg"}
          alt="youtube"
        />
      </div>

      <div className="flex flex-col">
        <span className="text-xs text-grey-500">쇼핑몰 이름</span>
        <span className="text-xs text-priamry-black font-medium">
          아이템 이름이 길게 적힌다면 몇 글자까지 적힐 수 있을까요
        </span>
        <span className=" text-sm text-grey-900 font-bold">123,102 원</span>
      </div>

      <button onClick={() => setHeart((heart) => !heart)}>
        {heart ? <HeartActive /> : <HeartInactive />}
      </button>
    </div>
  );
};

export interface LookFeedBoxProps {
  cutImg?: string;
}

export const LookFeedBox = ({ cutImg }: LookFeedBoxProps) => {
  return (
    <div className="flex flex-col w-full h-max bg-primary-white">
      <div className="w-full min-h-48 pt-[56.25%] relative">
        <Image
          layout="fill"
          objectFit="cover"
          src={"/img/cut.png"}
          alt="youtube"
        />
      </div>

      <div className="flex p-3 items-start gap-1">
        <span className="text-xs text-grey-500 font-medium">
          코디 상품 모아보기
        </span>
        <span className="text-xs text-primary-red font-medium">2</span>
      </div>

      <div className="overflow-scroll flex justify-start flex-col gap-3 flex-wrap  pl-3  h-[180px]">
        {[0, 1, 2, 3].map(() => (
          <LookFeedProductBox />
        ))}
      </div>
    </div>
  );
};

export default LookFeedBox;
