import Image from "next/image";
import HeartActive from "/public/icon/heart_active.svg";
import HeartInactive from "/public/icon/heart_inactive.svg";

import { useState } from "react";

export const VerticleProductInfo = () => {
  return (
    <div className="inline-flex flex-col h-max">
      <div className="w-full pt-[133.33333333%] relative bg-grey-300">
        <Image
          src={"/img/item2.jpeg"}
          alt="product"
          style={{ objectFit: "cover" }}
          fill={true}
        />
      </div>

      <div className="w-full">
        <div className=" text-xs font-medium text-grey-400">쇼핑몰 이름</div>
        <div className="text-xs font-medium text-primary-black">
          아이템 이름을 길게 해서 2줄로 만들어 봅시다
        </div>
        <span className="text-xs mr-1 font-medium text-primary-red">70%</span>
        <span className="text-[13px] font-bold text-primary-black">
          21,000원
        </span>
      </div>
    </div>
  );
};

export const VerticleProductInfoMedium = () => {
  const [heart, setHeart] = useState(false);
  return (
    <div className="inline-flex flex-col h-max">
      <div className="w-full pt-[133.33333333%] relative bg-slate-500">
        <Image
          src={"/img/item2.jpeg"}
          alt="product"
          style={{ objectFit: "cover" }}
          fill={true}
        />
      </div>

      <div className="w-full mt-2.5">
        <div className="flex w-full">
          <div>
            <div className=" text-xs text-grey-600">쇼핑몰 이름</div>
            <div className="text-sm font-medium text-primary-black">
              아이템 이름을 길게 해서 2줄로 만들어 봅시다
            </div>
          </div>
          <div className="mx-2.5">
            <button onClick={() => setHeart((heart) => !heart)}>
              {heart ? <HeartActive /> : <HeartInactive />}
            </button>
          </div>
        </div>
        <div className="mt-4">
          <span className=" text-base mr-1 font-medium text-primary-red">
            70%
          </span>
          <span className="text-base font-bold text-grey-900">21,000원</span>
        </div>
      </div>
    </div>
  );
};
