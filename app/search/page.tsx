"use client";

import { ButtonXS } from "@/components/Button";
import Divider from "@/components/Divider";
import { FilterButtonSmall } from "@/components/FilterButton";
import { ProfileInfo } from "@/components/ProfileInfo";
import Back from "@/public/icon/back";
import MagnifyingGlass from "@/public/icon/magnifyingGlass";
import Image from "next/image";
import { useState } from "react";

const RecentSearch = () => {
  return (
    <>
      <div className="w-full h-max  py-5 px-[18px]">
        <div className="w-full h-max flex justify-between items-center gap-2">
          <span className="flex-grow text-sm font-medium text-primary-black">
            최근 검색어
          </span>

          <span className="text-xs font-medium text-grey-400">전체 삭제</span>
          <div className=" w-[1px] h-3 bg-grey-400" />
          <span className="text-xs font-medium text-grey-400">완료</span>
        </div>

        <div className="w-full flex gap-2 mt-4 overflow-x-scroll ">
          <FilterButtonSmall type="selected" name="해피해은" />
          <FilterButtonSmall type="selected" name="해피해은" />
          <FilterButtonSmall type="selected" name="해피해은" />
          <FilterButtonSmall type="selected" name="해피해은" />
          <FilterButtonSmall name="해피해은" />
          <FilterButtonSmall name="해피해은" />
          <FilterButtonSmall name="해피해은" />
        </div>
      </div>

      <Divider />
    </>
  );
};

const Rank = () => {
  return (
    <div className="w-full gap-5 flex py-4 px-0.5">
      <span className=" text-sm font-bold text-primary-black">1</span>
      <span className="flex-grow text-sm font-medium text-primary-black">
        잠옷
      </span>
      <Image src={"/icon/rank_up.svg"} width={12} height={12} alt="Profile" />
    </div>
  );
};

export default function SearchPage() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <div className="w-full h-max flex flex-col items-start ">
        <div className="w-full mt-[50px]">
          <RecentSearch />
        </div>

        <div className="w-full h-max ">
          <div className="w-full h-max px-[18px] pt-5  flex gap-2 overflow-x-scroll">
            <ButtonXS type="active" name="전체" />
            <ButtonXS name="10대" />
            <ButtonXS name="20~24세" />
            <ButtonXS name="25~29세" />
            <ButtonXS name="30대 이상" />
            <ButtonXS name="30대 이상" />
            <ButtonXS name="30대 이상" />
            <ButtonXS name="30대 이상" />
          </div>
          <div className="flex flex-col pl-[18px] py-4 gap-5 w-full h-max">
            <span className="text-sm font-medium text-primary-black">
              인기 인플루언서
            </span>
            <div className="flex gap-2.5 overflow-x-scroll">
              <ProfileInfo name="해은해은" clothesNum={24} />
              <ProfileInfo name="해은해은" clothesNum={24} />
              <ProfileInfo name="해은해은" clothesNum={24} />
              <ProfileInfo name="해은해은" clothesNum={24} />
              <ProfileInfo name="해은해은" clothesNum={24} />
              <ProfileInfo name="해은해은" clothesNum={24} />
              <ProfileInfo name="해은해은" clothesNum={24} />
              <ProfileInfo name="해은해은" clothesNum={24} />
              <ProfileInfo name="해은해은" clothesNum={24} />
              <ProfileInfo name="해은해은" clothesNum={24} />
            </div>
          </div>
          <div className="w-full h-max py-4 px-[18px] mb-[14px]">
            <span>인기 카테고리</span>
            <div className="w-full h-max flex flex-col">
              <Rank />
              <Rank />
              <Rank />
              <Rank />
              <Rank />
              <Rank />
              <Rank />
              <Rank />
              <Rank />
              <Rank />
            </div>
          </div>
        </div>
      </div>

      <div className="topBar py-[5px]">
        <Back />

        <div
          className={`flex h-10 flex-grow px-[10px] py-2 gap-2.5 ml-[15px] border ${isFocused ? "border-black" : "border-grey-100"}`}
        >
          <form className="flex-grow">
            <input
              className="w-full"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="원하는 상품을 입력하세요"
            />
          </form>
          <MagnifyingGlass />
        </div>
      </div>
    </>
  );
}
