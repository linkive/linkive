"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <div className="w-full h-max sticky top-[50px] z-10 bg-white">
      <nav className="w-full h-[40px] flex">
        <Link className="w-full" href={"/selebProfile/video"}>
          <div className="flex gap-2.5 justify-center items-center h-full">
            <span className="text-sm font-semibold text-primary-black">
              영상
            </span>
            <span className="text-sm font-semibold text-primary-red">49</span>
          </div>
        </Link>
        <Link scroll={false} className="w-full" href={"/selebProfile/product"}>
          <div className="flex gap-2.5 justify-center items-center h-full ">
            <span className="text-sm font-semibold text-primary-black">
              상품
            </span>
            <span className="text-sm font-semibold text-primary-red">49</span>
          </div>
        </Link>
      </nav>

      <div
        className={`flex w-full h-0.5 ${pathname === "/selebProfile/video" ? "flex-row-reverse" : " flex-row"}`}
      >
        <div className="w-full h-full bg-white" />
        <div className="w-full h-full bg-black" />
      </div>
    </div>
  );
}
