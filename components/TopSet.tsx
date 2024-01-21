import Image from "next/image";
import style from "../style/home.module.css";

export const TopSet = () => {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={style.topSet_container}>
      <a className={style.logo} href="/">
        linkive logo
      </a>

      <div className={style.icon_container}>
        <Image src="/icon/profile.svg" width={24} height={24} alt="Profile" />
        <Image
          src="/icon/magnifying_glass.svg"
          width={24}
          height={24}
          alt="Search"
        />
      </div>
    </div>
  );
};

export default TopSet;
