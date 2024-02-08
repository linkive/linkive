"use client";

import React, { ReactNode, useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, PanInfo } from "framer-motion";

import { useClickOutside } from "@/hooks/useClickOutside";

import style from "@/style/bottomSheet.module.css";

export type BottomSheetChildProps = {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
};

type BottomSheetProps = {
  isVisible: boolean;
  children?: ReactNode | ((props: BottomSheetChildProps) => ReactNode);
  firstHeight?: number;
  setShowSheet: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BottomSheet: React.FC<BottomSheetProps> = ({
  isVisible,
  children,
  firstHeight = 500,
  setShowSheet,
}) => {
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [canClickOut, setCanClickOut] = useState(true);
  const [canDrag, setCanDrag] = useState(true);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    // Clean up function
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isVisible]);

  useClickOutside([componentRef], () => {
    if (isVisible && canClickOut) {
      console.log("click outside");
      setShowSheet(false);
    }
  });

  const handleDragStart = async (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setCanClickOut(false);
    console.log("start");
  };

  const handleDragEnd = async (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.y > 50) {
      console.log(info.offset.y);

      setShowSheet(false); // 드래그가 50px 아래로 끝났을 때 motion div 숨기기
    }
    console.log(info.offset.y);
    setCanClickOut(true);
  };

  if (!children) return null;

  const Children = React.Children.only(children as React.ReactElement);

  const variants = {
    open: { y: 0 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={style.background}
          />

          <motion.div
            variants={variants}
            animate={"open"}
            initial={{ y: firstHeight }}
            exit={{ y: firstHeight }}
            drag="y"
            className={style.root}
            dragListener={canDrag}
            transition={{ duration: 0.3 }}
            style={{ height: firstHeight }}
            dragConstraints={{ top: 0 }}
            dragElastic={0}
            onDragStart={handleDragStart}
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
      )}
    </AnimatePresence>
  );
};
