"use client";

import OrderFilterPage from "@/app/search_result/OrderFilterPage";
import { useOrderStore } from "@/app/search_result/store";
import { BottomSheet } from "@/components/BottomSheet";
import { ButtonXS } from "@/components/Button";
import { FilterButton } from "@/components/FilterButton";
import { VerticleProductInfo } from "@/components/VerticleProductInfo";
import Image from "next/image";
import { useState } from "react";

export default function Product() {
  const [showSheet, setShowSheet] = useState(false);
  const [showOrderSheet, setShowOrderSheet] = useState(false);

  const filter = useOrderStore((state) => state.order);

  return (
    <>
      <div className="w-full h-max">
        <div className="flex w-full py-3 pl-[18px] pr-2.5 gap-2.5 items-center">
          <Image
            priority
            src={"/icon/refresh.svg"}
            height={24}
            width={24}
            alt="refresh"
          />
          <FilterButton setShowSheet={setShowOrderSheet} name={filter} />
          <div className="w-full flex gap-1.5 overflow-x-scroll ">
            <ButtonXS type="active" name="전체" />
            <ButtonXS name="아우터" />
            <ButtonXS name="상의" />
            <ButtonXS name="팬츠" />
            <ButtonXS name="원피스" />
          </div>
          <button onClick={() => setShowSheet(true)}>
            <Image
              src={"/icon/arrow_right_active_big.svg"}
              width={24}
              height={24}
              alt="right"
            />
          </button>
        </div>
        <div className="px-[18px] grid grid-cols-3 gap-x-3 gap-y-5">
          <VerticleProductInfo />
          <VerticleProductInfo />
          <VerticleProductInfo />
          <VerticleProductInfo />
          <VerticleProductInfo />
          <VerticleProductInfo />
          <VerticleProductInfo />
          <VerticleProductInfo />
          <VerticleProductInfo />
          <VerticleProductInfo />
          <VerticleProductInfo />
          <VerticleProductInfo />
          <VerticleProductInfo />
        </div>
      </div>

      <BottomSheet
        isVisible={showOrderSheet}
        firstHeight={294}
        setShowSheet={setShowOrderSheet}
      >
        <OrderFilterPage setShowSheet={setShowOrderSheet} />
      </BottomSheet>

      <BottomSheet
        isVisible={showSheet}
        firstHeight={421}
        setShowSheet={setShowSheet}
      >
        <>
          <div
            className={`flex flex-col  px-[18px] w-full h-full bg-primary-white`}
          >
            <div className="inline-flex gap-1 items-start w-full py-2.5">
              <span className="text-sm font-medium text-primary-red">0개</span>
              <span className="text-sm font-medium text-grey-700">선택됨</span>
            </div>

            <div className="flex flex-col w-full h-[290px] py-5 gap-[30px] overflow-y-scroll">
              {[0, 1, 2, 3, 4, 5, 6].map(() => (
                <div className="flex flex-col w-full gap-4">
                  <div className="w-full flex justify-between">
                    <span className="text-sm font-medium text-primary-black">
                      아우터
                    </span>
                    <span className="text-xs font-medium text-grey-400">
                      전체선택
                    </span>
                  </div>
                  <div className="flex gap-x-2.5 gap-y-3 flex-wrap">
                    {[0, 1, 2, 3, 4, 5, 1, 1, 1, 1, 1, 1, 1].map(() => (
                      <ButtonXS name="팬츠" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex w-full h-[71px] justify-between items-end bg-white">
              <div className="flex w-40 h-12 justify-center items-center gap-2.5 rounded-md bg-primary-white border border-grey-100">
                <span className=" text-base font-medium text-grey-500">
                  초기화
                </span>
              </div>
              <div className="flex w-40 h-12 justify-center items-center gap-2.5 rounded-md bg-primary-black">
                <span className=" text-base font-medium text-primary-white">
                  적용
                </span>
              </div>
            </div>
            <div className="flex w-full h-8" />
          </div>
        </>
      </BottomSheet>
    </>
  );
}
