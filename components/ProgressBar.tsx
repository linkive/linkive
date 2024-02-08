"use client";

import { usePriceStore } from "@/app/search_result/store";
import {
  motion,
  useDragControls,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { useEffect, useRef, useState } from "react";

export function Oneside({ divisions = 6 }: { divisions: number }) {
  const handleX = useMotionValue(0);

  const dragControls = useDragControls();

  const containerRef = useRef<HTMLDivElement>(null);

  const [containerWidth, setContainerWidth] = useState(0);

  const [snapPoints, setSnapPoints] = useState<number[]>([]);

  const progressScaleX = useTransform(handleX, [0, containerWidth], [0, 1]);

  useEffect(() => {
    if (containerRef.current) {
      //width - drag btn size

      const width = containerRef.current.offsetWidth - 22;

      setContainerWidth(width); // 등분 지점 계산

      let points = Array.from(
        { length: divisions },

        (_, i) => (width / divisions) * i
      );

      if (points[points.length - 1] !== width) {
        points = [...points, width];
      }

      setSnapPoints(points);

      console.log(points);
    }
  }, [divisions]);

  const adjustToNearestSnapPoint = () => {
    const currentX = handleX.get(); // Find the nearest snap point

    const closest = snapPoints.reduce((prev, curr) =>
      Math.abs(curr - currentX) < Math.abs(prev - currentX) ? curr : prev
    ); // Update handleX to the nearest snap point

    handleX.set(closest);
  };

  return (
    <>
      <div
        onPointerDown={(e) => dragControls.start(e, { snapToCursor: false })}
        className="w-full h-[22px] flex items-center relative justify-start"
      >
        <div className="w-full h-1 rounded-sm bg-grey-300">
          <motion.div
            ref={containerRef}
            className="h-full rounded-sm bg-primary-black origin-left"
            style={{ scaleX: progressScaleX }}
          />
        </div>

        <motion.div
          className="w-[22px] h-[22px] z-10 rounded-2xl absolute left-0 bg-primary-white border border-primary-black"
          drag="x"
          dragConstraints={{ left: 0, right: containerWidth }}
          dragElastic={0}
          dragControls={dragControls}
          dragMomentum={false}
          onDrag={(event, info) => adjustToNearestSnapPoint()}
          style={{ x: handleX }}
        />
      </div>
    </>
  );
}

export function Twoside() {
  //TODO: min max 들와왔을 때 code
  //1. (max - min)/10000 +1 = div
  const price = usePriceStore((state) => ({
    min: state.min,
    max: state.max,
    setCurMin: state.setCurMin,
    setCurMax: state.setCurMax,
  }));
  //2. adjust함수에다가 closeset가 몇 번째 나열인지 확인

  //3. index로 setmin, setmax / 1번째면 +1 이런식으로

  const handleX = useMotionValue(0);
  const handleReverseX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [snapPoints, setSnapPoints] = useState<number[]>([]);
  const filledWidth = useTransform(
    [handleX, handleReverseX],

    () => containerWidth + handleReverseX.get() - handleX.get()
  );

  useEffect(() => {
    if (containerRef.current) {
      const divisions = Math.round((price.max - price.min) / 10000);

      //width - drag btn size
      const width = containerRef.current.offsetWidth - 22;

      setContainerWidth(width); // 등분 지점 계산

      let points = Array.from(
        { length: divisions },

        (_, i) => (width / divisions) * i
      );

      if (points[points.length - 1] !== width) {
        points = [...points, width];
      }

      setSnapPoints(points);
    }
  }, []);

  const adjustToNearestSnapPoint = () => {
    const currentX = handleX.get(); // Find the nearest snap point
    const rightX = containerWidth + handleReverseX.get();

    if (currentX > rightX) {
      handleX.set(rightX);

      return;
    }

    const closest = snapPoints.reduce((prev, curr) =>
      Math.abs(curr - currentX) < Math.abs(prev - currentX) ? curr : prev
    ); // Update x to the nearest snap point

    const index = snapPoints.findIndex((ele) => ele === closest);
    console.log(index);
    price.setCurMin(index * 10000);
    handleX.set(closest);
  };

  const adjustToNearestSnapPointReverse = () => {
    const currentX = containerWidth + handleReverseX.get(); // Find the nearest snap point
    const leftX = handleX.get();

    if (currentX < leftX) {
      handleReverseX.set(leftX - containerWidth);
      return;
    }

    const closest = snapPoints.reduce((prev, curr) =>
      Math.abs(curr - currentX) < Math.abs(prev - currentX) ? curr : prev
    );

    const index = snapPoints.findIndex((ele) => ele === closest);
    price.setCurMax(index * 10000);

    const move = closest - containerWidth;

    handleReverseX.set(move);
  };

  return (
    <>
      <div className="w-full h-[22px] flex items-center relative justify-start">
        <div ref={containerRef} className="w-full h-1 rounded-sm bg-grey-300">
          <motion.div
            className="h-full rounded-sm bg-primary-black origin-left"
            style={{
              x: handleX,

              width: filledWidth,
            }}
          />
        </div>

        <motion.div
          className="w-[22px] h-[22px] z-10 rounded-2xl absolute left-0 bg-primary-white border border-primary-black"
          drag="x"
          dragConstraints={{ left: 0, right: containerWidth }}
          dragElastic={0}
          dragMomentum={false}
          onDrag={(event, info) => adjustToNearestSnapPoint()}
          style={{ x: handleX }}
        />

        <motion.div
          className="w-[22px] h-[22px] z-10 rounded-2xl absolute right-0 bg-primary-white border border-primary-black"
          drag="x"
          dragConstraints={{ left: -containerWidth, right: 0 }}
          dragElastic={0}
          dragMomentum={false}
          onDrag={(event, info) => adjustToNearestSnapPointReverse()}
          style={{ x: handleReverseX }}
        />
      </div>
    </>
  );
}
