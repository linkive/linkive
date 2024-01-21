"use client";
import Image from "next/image";
import style from "../style/feedBox.module.css";
import Dropdown from "/public/icon/dropdown.svg";
import { YouTubeEmbed } from "./Youtube";

export interface FeedboxProps {
  cutImg: string;
  setShowSheet: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FeedBox = ({ cutImg, setShowSheet }: FeedboxProps) => {
  return (
    <div className={style.feedBox_container}>
      <div className={style.feedBox_profileBar}>
        <div className={style.feedBox_profile_image} />
        <div className={style.feedBox_userInfo}>
          <span className={style.feedBox_username}>username</span>
          <span className={style.feedBox_date}>2023.01.16</span>
        </div>
      </div>
      <div className={style.feedBox_video}>
        {/* <Image
          src={cutImg}
          alt="product"
          style={{ objectFit: "contain" }}
          fill={true}
        /> */}
        <YouTubeEmbed videoId="wpyciSOvkxQ&t=90s" />
      </div>

      <button
        onClick={() => {
          setShowSheet(true);
        }}
        className={style.feedBox_product_dropbox_container}
      >
        <div className={style.feedBox_product_info}>
          <span className={style.feedBox_product_info_description}>
            코디 상품 모아보기
          </span>
          <span className={style.feedBox_product_info_count}>05</span>
        </div>

        <div className={style.feedBox_product_dropbox_wrapper}>
          <Image src={"/img/item.png"} width={32} height={43} alt="product" />

          <div className={style.feedBox_product_dropbox_info}>
            <span className={style.brand}>HERNO</span>
            <span className={style.productName}>
              스트링 하이넥 후드 구스다운 패딩 코트
            </span>
          </div>

          <Dropdown style={{ color: "var(--grey-500)" }} />
        </div>
      </button>
    </div>
  );
};

export default FeedBox;
