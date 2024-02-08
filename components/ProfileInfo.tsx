import Image from "next/image";
import Hanger from "/public/icon/hanger.svg";

interface ProfileInfoProps {
  type?: "small" | "default" | "active" | "selected" | "updated";
  src?: string;
  name: string;
  clothesNum: number;
}

export function ProfileInfo({
  type = "default",
  src = "/img/profile.jpeg",
  name,
  clothesNum,
}: ProfileInfoProps) {
  return (
    <button
      onClick={() => {
        console.log("click");
      }}
    >
      <div className=" w-[72px] h-max flex flex-col items-center">
        <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden">
          <Image
            src={src}
            alt="product"
            style={{ objectFit: "cover" }}
            fill={true}
          />
        </div>
        <p className="w-full mt-2 text-xs font-medium text-grey-800 truncate">
          해은해은
        </p>
        <div className="flex gap-0.5 items-center justify-center">
          <Hanger />
          <span className="text-xs text-grey-400">{clothesNum}</span>
        </div>
      </div>
    </button>
  );
}
