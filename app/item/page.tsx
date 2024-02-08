"use client";

import Back from "@/public/icon/back";
import MagnifyingGlass from "@/public/icon/magnifyingGlass";
import Image from "next/image";
import { useState } from "react";
import HeartActive from "/public/icon/heart_active.svg";
import HeartInactive from "/public/icon/heart_inactive.svg";
import ArrowRight from "/public/icon/arrow_right.svg";
import ArrowRightActive from "/public/icon/arrow_right_active_big.svg";

import Divider from "@/components/Divider";
import Link from "next/link";

const SellerPlatform = () => {
  return (
    <div className="flex w-full justify-center items-center h-[54px] py-2.5 gap-2.5">
      <div className="w-[34px] h-[34px] bg-grey-400" />
      <div className="flex-grow">
        <span className="font-sm font-bold text-grey-900">에이블리</span>
      </div>
      <span className="font-sm font-medium text-primary-red">10%</span>
      <span className="font-sm font-medium text-grey-600">87,200원</span>
      <Link href="related_product">
        <ArrowRightActive />
      </Link>
    </div>
  );
};

export default function ItemPage() {
  const [heart, setHeart] = useState(false);
  return (
    <>
      <div className="w-full h-max flex flex-col items-start">
        <div className="flex w-full pt-[133.33333333%] relative bg-slate-500">
          <Image
            src={"/img/item2.jpeg"}
            alt="product"
            style={{ objectFit: "cover" }}
            fill={true}
          />
        </div>

        <div className="w-full h-max relative flex flex-col px-[18px] py-6 gap-5">
          <div className="flex flex-grow h-max justify-between w-full">
            <div className="flex flex-col">
              <span className=" text-sm text-grey-500">BOHEMSEO</span>
              <span className=" text-xl font-medium text-primary-black">
                BASIC FOLDED LONG SKIRT
              </span>
            </div>

            <button
              className="flex flex-col items-start"
              onClick={() => setHeart((heart) => !heart)}
            >
              {heart ? <HeartActive /> : <HeartInactive />}
            </button>
          </div>
          <div className=" w-full flex-grow h-max">
            <div className="text-sm font-medium text-grey-400">210.000원</div>
            <span className=" text-2xl mr-1 font-bold text-primary-red">
              70%
            </span>
            <span className="text-2xl font-bold text-primary-black">
              21,000원
            </span>
          </div>
        </div>

        <Divider />

        {/* TODO: 연관 상품리스트 */}
        <div className="w-full h-max py-6 px-[18px]">
          <div className="inline-flex w-full  mb-3 justify-between">
            <div>
              <span className=" text-sm font-medium text-grey-700">
                연관 상품리스트
              </span>
              <span className=" ml-1 text-sm font-medium text-primary-red">
                4
              </span>
            </div>
            <Link href="related_product">
              <div className="inline-flex justify-center items-center">
                <span className="text-xs font-medium text-grey-400">
                  전체보기
                </span>
                <ArrowRight />
              </div>
            </Link>
          </div>

          <div className="flex gap-2 w-full overflow-x-scroll">
            {[0, 1, 2, 3, 4, 5].map(() => (
              <Image
                src={"/img/item1.jpeg"}
                alt="product"
                width={90}
                height={120}
              />
            ))}
          </div>
        </div>

        <Divider />

        <div className="w-full h-max py-6 px-[18px]">
          <div className="inline-flex w-full  mb-3 justify-between">
            <div>
              <span className=" text-sm font-medium text-grey-700">판매처</span>
              <span className=" ml-1 text-sm font-medium text-primary-red">
                4
              </span>
            </div>
          </div>
          <SellerPlatform />
          <SellerPlatform />
          <SellerPlatform />
          <SellerPlatform />
        </div>
      </div>

      <div className="topBar" style={{ backgroundColor: "transparent" }}>
        <Back color="white" />

        <h1 className="text-primary-white">상품 상세</h1>
        <MagnifyingGlass color="white" />
      </div>
    </>
  );
}
