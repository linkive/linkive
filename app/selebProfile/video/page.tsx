import Image from "next/image";

const VideoContainer = () => {
  return (
    <div className="flex w-full h-[105px] px-[18px] py-3 gap-2.5 border-b border-grey-50">
      <Image
        placeholder="empty"
        priority
        src={"/img/cut.png"}
        width={144}
        height={81}
        alt="thumbnail"
      />
      <div className="flex flex-col items-start flex-grow h-full">
        <div>
          <p className="text-sm font-medium text-primary-black">
            성해은 겨울 옷장 털기🧤🧣ㅣ올겨울 잘산템 소개ㅣ해피해은💙[CC]
          </p>
          <span className="block text-xs text-grey-400 mt-0.5">2022.04.22</span>
        </div>
        <div className="inline-flex h-max items-end flex-grow">
          <span className="text-xs font-medium text-grey-600">코디 10</span>
          <span className="ml-2.5 text-xs font-medium text-grey-600">
            상품 20
          </span>
        </div>
      </div>
    </div>
  );
};

export default function SelebProfile() {
  return (
    <div className="flex flex-col w-full h-max">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 0, 10].map(() => (
        <VideoContainer />
      ))}
    </div>
  );
}
