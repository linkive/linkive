import Image from "next/image";
import style from "../style/home.module.css";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const RankBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const info = ["여자 무스탕", "트위드 자켓", "아무거나 엄청 긴 거 작성"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    // <div className={style.rankBar}>
    //   <div
    //     key={1}
    //     className={`${style.rankBar_container} ${
    //       activeIndex === 0 ? style.active : ""
    //     }`}
    //   >
    //     <span className={style.rank}>1</span>
    //     <span className={style.rank_text}>여자 무스탕</span>

    //     <Image src="/icon/rank_up.svg" width={12} height={12} alt="Profile" />
    //   </div>

    //   <div
    //     key={2}
    //     className={`${style.rankBar_container} ${
    //       activeIndex === 1 ? style.active : ""
    //     }`}
    //   >
    //     <span className={style.rank}>2</span>
    //     <span className={style.rank_text}>무스탕</span>

    //     <Image src="/icon/rank_down.svg" width={12} height={12} alt="Profile" />
    //   </div>

    //   <div
    //     key={3}
    //     className={`${style.rankBar_container} ${
    //       activeIndex === 2 ? style.active : ""
    //     }`}
    //   >
    //     <span className={style.rank}>3</span>
    //     <span className={style.rank_text}>무스탕</span>

    //     <Image src="/icon/rank_down.svg" width={12} height={12} alt="Profile" />
    //   </div>
    // </div>
    <div className={style.rankBar}>
      <AnimatePresence>
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div key={activeIndex} className={`${style.rankBar_container}`}>
            <span className={style.rank}>{activeIndex + 1}</span>
            <span className={style.rank_text}>{info[activeIndex]}</span>

            <Image
              src={
                !(activeIndex % 2) ? "/icon/rank_up.svg" : "/icon/rank_down.svg"
              }
              width={12}
              height={12}
              alt="Profile"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RankBar;
