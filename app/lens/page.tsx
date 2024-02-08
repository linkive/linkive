"use client";

import Image from "next/image";
import React, { ReactNode, useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, PanInfo } from "framer-motion";

import { useClickOutside } from "@/hooks/useClickOutside";

import style from "@/style/bottomSheet.module.css";
import { BottomSheet } from "@/components/BottomSheet";
import OrderFilterPage from "../search_result/OrderFilterPage";
import FilterSheet from "../search_result/FilterSheet";
import { useOrderStore } from "../search_result/store";
import { FilterButton } from "@/components/FilterButton";
import { VerticleProductInfo } from "@/components/VerticleProductInfo";

type BottomSheetProps = {
  children?: ReactNode;
  firstTop?: number;
};

export const LensBottomSheet: React.FC<BottomSheetProps> = ({
  children,
  firstTop,
}) => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  const [canDrag, setCanDrag] = useState(true);
  const [up, setUp] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Clean up function
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [document.body.style.overflow]);

  const handleDragEnd = async (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.y > 50) {
      console.log(info.offset.y);
      setUp(false);
    }
    if (info.offset.y < -50) {
      console.log(info.offset.y);
      setUp(true);
    }
  };

  if (!children) return null;

  const Children = React.Children.only(children as React.ReactElement);

  const variants = {
    open: { top: 50 },
    close: { top: firstTop },
  };

  return (
    <>
      <motion.div
        variants={variants}
        animate={up ? "open" : "close"}
        drag="y"
        className={style.root}
        dragListener={canDrag}
        transition={{ duration: 0.3 }}
        style={{ zIndex: 50, height: "calc(100dvh - 50px)" }}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragMomentum={false}
        dragElastic={0}
        onDragEnd={handleDragEnd}
        onTapStart={(_, info) => {
          if (componentRef.current) {
            const topLimit =
              componentRef.current.getBoundingClientRect().top + 80;
            if (info.point.y < topLimit) {
              setCanDrag(true);
            } else {
              setCanDrag(false);
            }
          }
        }}
        ref={componentRef}
      >
        <div className={style.wrapper}>
          <div className={style.line}>
            <div className={style.innerLine}></div>
          </div>
          <div className={style.content}>{Children}</div>
        </div>
      </motion.div>
    </>
  );
};

export default function LookPage() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState(0);

  const [showSheet, setShowSheet] = useState(false);
  const [showOrderSheet, setShowOrderSheet] = useState(false);

  const filter = useOrderStore((state) => state.order);

  useEffect(() => {
    if (contentRef.current) {
      setTop(contentRef.current.offsetHeight);
    }
  }, [top]);
  return (
    <>
      <div className="w-full h-dvh flex flex-col items-start overflow-hidden">
        <div className="topBar" style={{ backgroundColor: "transparent" }}>
          <Image width={24} height={24} src={"/icon/back.svg"} alt="back" />
        </div>
        {/* filter btn */}

        <div
          ref={contentRef}
          className="flex w-full pt-[133.33333333%] relative bg-slate-500"
        >
          <Image
            src={"/img/item1.jpeg"}
            alt="product"
            style={{ objectFit: "cover" }}
            fill={true}
          />

          <motion.div
            drag
            dragMomentum={false}
            dragConstraints={contentRef}
            className="absolute top-0 bg-slate-500"
            style={{ width: 150, height: 150 }}
          ></motion.div>
        </div>

        <LensBottomSheet firstTop={top}>
          <div className="flex flex-col">
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
                name="0원 ~ 200,000원"
              />
            </div>

            <div className="px-[18px] py-5 grid grid-cols-3 gap-3">
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
        </LensBottomSheet>
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
