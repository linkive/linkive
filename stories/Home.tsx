import { Suspense, useState } from "react";
import RankBar from "../components/RankBar";
import FeedBox, { FeedboxProps } from "../components/FeedBox";
import Divider from "../components/Divider";
import { BottomSheet } from "../components/BottomSheet";
import TopSet from "../components/TopSet";
import "./home.css";
import { YouTubeEmbed } from "../components/Youtube";
import Image from "next/image";
import Dropdown from "/public/icon/dropdown.svg";

export interface HomeProps {
  /**
   * 화면 content 개수
   */
  contentNumber?: number;
}

export const Home = ({ contentNumber = 4 }: HomeProps) => {
  const imageUrls: string[] = [];
  //const temp: FeedboxProps = { cutImg: "re" };
  const [showSheet, setShowSheet] = useState(false);

  for (let i = 0; i < contentNumber; i++) {
    imageUrls.push(`https://d1zk9dvuki94by.cloudfront.net/toil-img-${i}.jpg`);
  }
  return (
    <>
      <TopSet />
      <RankBar />
      <Divider height={10} />

      {imageUrls.map((url: string, index: number) => (
        <div className={"feedBox_container"}>
          <div className={"feedBox_profileBar"}>
            <div className="feedBox_profile_image" />
            <div className={"feedBox_userInfo"}>
              <span className={"feedBox_username"}>username</span>
              <span className={"feedBox_date"}>2023.01.16</span>
            </div>
          </div>
          <div className={"feedBox_video"}>
            <video width="100%" height="100%" muted preload="auto" loop>
              <source src="/video/outputBetter.mp4" type="video/mp4" />
            </video>
          </div>

          <button
            onClick={() => {
              setShowSheet(true);
            }}
            className={"feedBox_product_dropbox_container"}
          >
            <div className={"feedBox_product_info"}>
              <span className={"feedBox_product_info_description"}>
                코디 상품 모아보기
              </span>
              <span className={"feedBox_product_info_count"}>05</span>
            </div>

            <div className={"feedBox_product_dropbox_wrapper"}>
              <Image
                src={"/img/item.png"}
                width={32}
                height={43}
                alt="product"
              />

              <div className={"feedBox_product_dropbox_info"}>
                <span className={"brand"}>HERNO</span>
                <span className={"productName"}>
                  스트링 하이넥 후드 구스다운 패딩 코트
                </span>
              </div>

              {/* <Dropdown style={{ color: "var(--grey-500)" }} /> */}
            </div>
          </button>
        </div>
      ))}
    </>
  );
};
