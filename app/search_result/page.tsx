"use client";

import style from "@/style/look.module.css";
import Image from "next/image";
import { FilterButton } from "@/components/FilterButton";
import SearchFeedBox from "@/components/SearchFeedBox";
import { useState, UIEventHandler } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { BottomSheet } from "@/components/BottomSheet";
import FilterSheet from "./FilterSheet";
import OrderFilterPage from "./OrderFilterPage";
import { useOrderStore } from "./store";

export default function SearchResult() {
  const [showSheet, setShowSheet] = useState(false);
  const [showOrderSheet, setShowOrderSheet] = useState(false);

  const filter = useOrderStore((state) => state.order);
  return (
    <>
      <div className="w-full h-auto flex flex-col items-start;">
        <div className="flex flex-col w-full flex-start mt-[50px] h-auto">
          {/* filter btn */}
          <div className="flex w-full py-3 px-[18px] gap-2.5 items-center border-solid border-b border-b-rgba(242, 242, 245, 1)">
            <FilterButton setShowSheet={setShowOrderSheet} name={filter} />
            <FilterButton
              setShowSheet={setShowSheet}
              type="selected"
              name="가격"
            />
            <FilterButton
              setShowSheet={setShowSheet}
              name="색상"
              type="active"
            />
          </div>

          {/* content  */}
          {[0, 1, 2, 3, 4, 5].map(() => (
            <SearchFeedBox />
          ))}
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
        <FilterSheet />
      </BottomSheet>

      <div className="topBar">
        <Image width={24} height={24} src={"/icon/back.svg"} alt="back" />
        <h1>'스커트' 검색결과</h1>
        <Image
          width={24}
          height={24}
          src={"/icon/magnifying_glass.svg"}
          alt="showroom"
        />
      </div>
    </>
  );
}
