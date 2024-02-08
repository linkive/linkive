"use client";

import { useState } from "react";
import { YouTubeEmbed } from "./Youtube";
import Image from "next/image";
import HeartActive from "/public/icon/heart_active.svg";
import HeartInactive from "/public/icon/heart_inactive.svg";

const SearchFeedProductBox = () => {
  const [heart, setHeart] = useState(false);

  return (
    <div className="flex w-full px-[18px] gap-2.5 items-center justify-start">
      <div className=" w-[60px] h-20 relative">
        <Image
          layout="fill"
          objectFit="cover"
          src={"/img/item1.jpeg"}
          alt="youtube"
        />
      </div>

      <div className="flex flex-col h-20 flex-1 gap-3 justify-between">
        <div className="flex flex-col">
          <span className="text-xs text-grey-500">쇼핑몰 이름</span>
          <span className="text-xs text-priamry-black font-medium">
            아이템 이름이 길게 적힌다면 몇 글자까지 적힐 수 있을까요
            sdfsdfsdfsdfsd
          </span>
        </div>

        <div className="flex gap-1">
          <span className=" text-base text-primary-red font-bold">15%</span>
          <span className=" text-base text-grey-900 font-bold">123,102 원</span>
        </div>
      </div>

      <button onClick={() => setHeart((heart) => !heart)}>
        {heart ? <HeartActive /> : <HeartInactive />}
      </button>
    </div>
  );
};

export const SearchFeedBox = () => {
  return (
    <div className="inline-flex flex-col pt-4 gap-4 items-start w-full">
      <div className="flex w-full px-[18px]  items-center gap-2.5">
        <div className="block w-7 h-7 relative">
          <Image
            fill={true}
            objectFit="contain"
            style={{ borderRadius: "50%" }}
            src={"/img/profile.jpeg"}
            alt="youtube"
          />
        </div>
        <div className="flex flex-col items-start justify-end">
          <span className="text-sm font-medium text-grey-600 leading-4">
            윤비누 YOONSOAP
          </span>
          <span className="text-xs text-grey-400 leading-4">2023.01.16</span>
        </div>
      </div>
      <div className=" relative block w-full h-min-[211px] bg-grey-100">
        <YouTubeEmbed videoId="wpyciSOvkxQ&t=90s" />
      </div>

      <SearchFeedProductBox />

      <div className="w-full h-2.5 bg-grey-50"></div>
    </div>
  );
};

export default SearchFeedBox;
