import React, { ReactNode, useState, useRef, useEffect } from "react";
import cx from "classnames";
import {
  animate,
  AnimatePresence,
  motion,
  PanInfo,
  useAnimation,
  useMotionValue,
} from "framer-motion";
import { useClickOutside } from "../hooks/useClickOutside";

import style from "../style/bottomSheet.module.css";

export type BottomSheetChildProps = {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
};

type BottomSheetProps = {
  children?: ReactNode | ((props: BottomSheetChildProps) => ReactNode);
  firstHeight?: number;
  onClickOutside?: () => void;
  closeOnClickOutside?: boolean;
  setShowSheet: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BottomSheet: React.FC<BottomSheetProps> = ({
  children,
  firstHeight = 500,
  onClickOutside,
  closeOnClickOutside = true,
  setShowSheet,
}) => {
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number>(firstHeight);
  const [isOpen, setOpen] = useState<boolean>(true);
  const y = useMotionValue(0);
  const controls = useAnimation();

  // useEffect(() => {
  //   //setHeight(isOpen ? fullHeight : firstHeight);
  //   setHeight(firstHeight);
  // }, [isOpen, setHeight, firstHeight]);

  useClickOutside([componentRef], () => {
    onClickOutside?.();

    controls.start({
      y: "60vh",

      transition: { duration: 0.3 },
    });

    // const timer = setTimeout(() => {
    //   setShowSheet(false);
    // }, 300);
    // clearTimeout(timer);

    // if (closeOnClickOutside) {
    //   setOpen(false);
    // }
  });

  const handleDragEnd = async (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.y > 0) {
      await controls.start({
        y: "60vh",

        transition: { duration: 0.3 },
      });
      setShowSheet(false); // 드래그가 50px 아래로 끝났을 때 motion div 숨기기
    }
  };

  if (!children) return null;

  const Children =
    typeof children === "function"
      ? children({ isOpen, setOpen })
      : React.Children.only(children as React.ReactElement);

  return (
    <motion.div
      drag="y"
      className={style.root}
      dragConstraints={{ top: 0 }}
      dragElastic={0}
      onDragEnd={handleDragEnd}
      ref={componentRef}
      animate={controls} // 최종적으로 Y축에서 0 위치로 이동
    >
      <div className={style.wrapper}>
        <div className={style.line}>
          <div className={style.innerLine}></div>
        </div>
        <div className={style.content}>{Children}</div>
      </div>
    </motion.div>
  );
};
