"use client";
import { FilterButton } from "@/components/FilterButton";
import Back from "@/public/icon/back";
import MagnifyingGlass from "@/public/icon/magnifyingGlass";
import { useState } from "react";
import { useOrderStore } from "../search_result/store";
import Image from "next/image";
import { BottomSheet } from "@/components/BottomSheet";
import OrderFilterPage from "../search_result/OrderFilterPage";
import FilterSheet from "../search_result/FilterSheet";
import { VerticleProductInfoMedium } from "@/components/VerticleProductInfo";

export default function RelatedProductPage() {
  const [showSheet, setShowSheet] = useState(false);
  const [showOrderSheet, setShowOrderSheet] = useState(false);

  const filter = useOrderStore((state) => state.order);

  return (
    <>
      <div className="w-full h-auto flex flex-col items-start;">
        <div className="flex flex-col w-full flex-start mt-[50px] h-auto">
          {/* filter btn */}
          <div className="flex w-full py-3 px-[18px] gap-2.5 items-center border-solid border-b border-b-rgba(242, 242, 245, 1)">
            <Image
              src={"/icon/refresh.svg"}
              height={24}
              width={24}
              alt="refresh"
            />
            <FilterButton setShowSheet={setShowOrderSheet} name={filter} />
            <FilterButton
              setShowSheet={setShowSheet}
              type="active"
              name="0~200,000원"
            />
          </div>

          {/* content  */}
          <div className="px-[18px] py-5 grid grid-cols-2 gap-5">
            <VerticleProductInfoMedium />
            <VerticleProductInfoMedium />
            <VerticleProductInfoMedium />
            <VerticleProductInfoMedium />
            <VerticleProductInfoMedium />
            <VerticleProductInfoMedium />
            <VerticleProductInfoMedium />
            <VerticleProductInfoMedium />
          </div>
        </div>
      </div>

      <div className="topBar">
        <Back />

        <h1 className="text-primary-black">상품 상세</h1>
        <MagnifyingGlass />
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
        <FilterSheet />
      </BottomSheet>
    </>
  );
}
