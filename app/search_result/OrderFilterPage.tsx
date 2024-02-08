import { useState } from "react";
import { useOrderStore } from "./store";
import { OrderType } from "./store";

export default function OrderFilterPage({
  setShowSheet,
}: {
  setShowSheet: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const orderOptions: OrderType[] = [
    "최신순",
    "좋아요 많은 순",
    "낮은 가격순",
    "높은 가격순",
  ];

  const order = useOrderStore((state) => state.order);
  const setOrder = useOrderStore((state) => state.setOrder);

  return (
    <div className="w-full h-full px-[18px] flex flex-col overflow-auto ">
      {orderOptions.map((item) => (
        <button
          key={item}
          onClick={() => {
            setOrder(item);
            setShowSheet(false);
          }}
        >
          <div
            className={`flex h-[58px] py-5 text-sm font-medium  ${item === order ? `text-primary-black border-b border-primary-black` : `text-grey-400`}`}
          >
            <span className="text-sm font-medium">{item}</span>
          </div>
        </button>
      ))}
    </div>
  );
}
