import React from "react";
import Image from "next/image";
import "./product.css";

interface ProductProps {
  /**
   * 단독사진으로 할 것인가
   */
  solitary?: boolean;
  /**
   * 상품명
   */
  name: string;
  /**
   * 브랜드명
   */
  brand: string;
  /**
   * 가격
   */
  price: number;
  /**
   * 이미지 주소
   */
  src: string;
}

function formatNumber(num: number) {
  return new Intl.NumberFormat("ko-KR", { style: "decimal" }).format(num);
}

/**
 * 제품 리스트 componenet
 */
export const Product = ({ solitary = false, ...props }: ProductProps) => {
  const shortenedText =
    props.brand.length > 15 ? props.brand.slice(0, 15) + "..." : props.brand;

  return solitary ? (
    <div className="solo-product-wrap">
      <div className="solo-product-image">
        <Image
          src={props.src}
          fill={true}
          layout="fill"
          objectFit="cover"
          alt={`${props.brand} 의${props.name}`}
        />
      </div>
      <footer className="solo-product-description">
        <span>{shortenedText}</span>
        <span>{props.name}</span>
        <span>{`최저 ${formatNumber(props.price)}원`}</span>
      </footer>
    </div>
  ) : (
    <div className="product-wrap">
      <div className="product-image">
        <Image
          src={props.src}
          fill={true}
          layout="fill"
          objectFit="cover"
          alt={`${shortenedText} 의${props.name}`}
        />
      </div>
      <footer className="product-description">
        <span>{shortenedText}</span>
        <span>{props.name}</span>
        <span>{`KRW ${formatNumber(props.price)}`}</span>
      </footer>
    </div>
  );
};
