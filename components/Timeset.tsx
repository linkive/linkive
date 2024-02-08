"use client";
import Image from "next/image";
import { useState } from "react";
import style from "@/style/look.module.css";

interface NumberItemProps {
  number: number;
  isLastItem: boolean;
}

function TimesetItem({ number, isLastItem }: NumberItemProps) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className={`flex w-11 flex-col items-center gap-2  ${!isLastItem && "after:content-[''] after:w-0.5 after:h-14 after:mt-0.5 after:bg-grey-100 "} `}
    >
      <button
        onClick={() => {
          setIsClicked((pre) => !pre);
        }}
        className="h-5 w-5 relative"
      >
        {isClicked ? (
          <Image
            layout="fill"
            objectFit="cover"
            src={"/icon/timeset.svg"}
            alt="youtube"
          />
        ) : (
          <Image
            layout="fill"
            objectFit="cover"
            src={"/icon/timeunset.svg"}
            alt="youtube"
          />
        )}
      </button>
      <span className="text-sm font-bold">01:00</span>
    </div>
  );
}

export default function Timeset({ items }: { items: number[] }) {
  return (
    <div className={style.timeset}>
      {/* time click */}
      {items.map((item, index) => (
        <TimesetItem
          key={index}
          number={item}
          isLastItem={index === items.length - 1}
        />
      ))}
    </div>
  );
}
