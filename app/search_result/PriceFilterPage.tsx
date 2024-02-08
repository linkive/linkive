import { Twoside } from "@/components/ProgressBar";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { usePriceStore } from "./store";

function toCurrency(price: number) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function PriceFilterPage() {
  const price = usePriceStore((state) => ({
    min: state.min,
    max: state.max,
    curMin: state.curMin,
    curMax: state.curMax,
  }));
  return (
    <div className="flex flex-col w-full h-full pt-6 gap-5">
      <span className=" text-2xl font-bold text-primary-black">
        {toCurrency(price.curMin)}원 ~ {toCurrency(price.curMax)}원
      </span>
      <Twoside />
    </div>
  );
}
