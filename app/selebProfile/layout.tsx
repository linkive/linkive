import Back from "@/public/icon/back";
import MagnifyingGlass from "@/public/icon/magnifyingGlass";
import Image from "next/image";
import Nav from "./Nav";

export default function SelebProfile({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full h-max">
        <div className="flex gap-2.5 w-full px-[18px] py-4 mt-[50px]">
          <div className=" flex-shrink-0 relative w-16 h-16 rounded-full overflow-hidden">
            <Image
              priority
              src={"/img/profile.jpeg"}
              alt="profile"
              style={{ objectFit: "cover" }}
              fill={true}
              sizes="10vw"
            />
          </div>

          <div className="flex flex-col w-full h-16 items-start py-0.5">
            <span className="text-xs font-medium text-grey-600">@happyshe</span>
            <h2 className=" text-lg font-medium text-primary-black mb-1">
              해피해은
            </h2>
            <div className="flex gap-2.5 text-xs font-medium text-grey-400">
              <span>구독자 32만</span>
              <span>동영상 291</span>
            </div>
          </div>
        </div>

        {/* navbar */}
        <Nav />

        <div className="w-full h-max">{children}</div>
      </div>

      <div className="topBar">
        <Back />

        <h1 className="text-primary-black">셀럽 프로필</h1>
        <MagnifyingGlass />
      </div>
    </>
  );
}
