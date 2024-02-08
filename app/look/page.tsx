import Timeset from "@/components/Timeset";
import LookFeedBox from "@/components/LookFeedBox";
import style from "@/style/look.module.css";
import Image from "next/image";

export default function LookPage() {
  const timelist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <>
      <div className="w-full h-auto flex flex-col items-start">
        <div className="flex flex-col w-full flex-start mt-14 h-auto">
          <div className={style.video}>
            <div className={style.videoPic}>
              <span className="text-xs font-medium text-grey-600">
                영상 정보
              </span>
              <div className="block h-20 w-36 relative">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={"/img/thumbnail.webp"}
                  alt="youtube"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-base font-medium">해피 해은 HAPPY</span>
              <span className="text-xs text-grey-400">2023.09.28</span>
              <span className="text-sm mt-1 font-medium">
                붕어빵의 계절이 돌아 오는데요 내가 누구인지 아는 사람
              </span>
            </div>
          </div>

          <div className="flex w-full h-auto items-start">
            <Timeset items={timelist} />

            <div className="flex flex-col w-full flex-grow gap-10">
              {[0, 1, 2, 3, 4].map(() => (
                <LookFeedBox />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={style.topBar}>
        <Image width={24} height={24} src={"/icon/back.svg"} alt="back" />
        <h1>영상 속 코디보기</h1>
        <Image
          width={24}
          height={24}
          src={"/icon/showroom.svg"}
          alt="showroom"
        />
      </div>
    </>
  );
}
