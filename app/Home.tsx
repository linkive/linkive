"use client";

import Image from "next/image";
import style from "../style/home.module.css";
import HeartActive from "/public/icon/heart_active.svg";
import HeartInactive from "/public/icon/heart_inactive.svg";

import { Suspense, useState } from "react";
import RankBar from "../components/RankBar";
import FeedBox, { FeedboxProps } from "../components/FeedBox";
import Divider from "../components/Divider";
import { BottomSheet } from "../components/BottomSheet";
import TopSet from "../components/TopSet";
import { AnimatePresence } from "framer-motion";

const FeedBoxProductDropBox = () => {
  const [heart, setHeart] = useState(false);

  return (
    <div className={style.feedBox_product_dropbox_wrapper}>
      <Image src={"/img/item1.jpeg"} width={84} height={112} alt="product" />
      <div className={style.feedBox_product_dropbox_info}>
        <div className={style.feedBox_product_dropbox_upper}>
          <span className={style.brand}>HERNO</span>
          <span className={style.productName}>
            스트링 하이넥 후드 구스다운 패딩 코트
          </span>
        </div>

        <div className={style.priceInfo}>
          <span className={style.sale}>10%</span>
          <span className={style.price}>106,000원</span>
        </div>
      </div>
      <button onClick={() => setHeart((heart) => !heart)}>
        {heart ? <HeartActive /> : <HeartInactive />}
      </button>
    </div>
  );
};

export interface HomeProps {
  /**
   * 화면 content 개수
   */
  contentNumber?: number;
}

export default function Home({ contentNumber = 4 }: HomeProps) {
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

      <BottomSheet
        isVisible={showSheet}
        firstHeight={600}
        setShowSheet={setShowSheet}
      >
        <div className={style.feedBox_product_dropbox_container}>
          <div className={style.feedBox_product_info}>
            <span className={style.feedBox_product_info_description}>
              코디 상품 모아보기
            </span>
            <span className={style.feedBox_product_info_count}>4</span>
          </div>

          {/* 4번 반복 */}
          <FeedBoxProductDropBox />
          <FeedBoxProductDropBox />
          <FeedBoxProductDropBox />
          <FeedBoxProductDropBox />

          {/* 반복 끝 */}

          <div className={style.feedBox_product_btnset}>
            <div className={style.feedBox_product_btn}>영상 속 코디보기</div>
          </div>
        </div>
      </BottomSheet>

      {imageUrls.map((url: string, index: number) => (
        <FeedBox key={index} cutImg={url} setShowSheet={setShowSheet} />
      ))}
    </>
  );
}
