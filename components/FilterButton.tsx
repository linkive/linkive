import style from "@/style/button.module.css";
import Close from "@/public/icon/closeCom";
import ArrowBottom from "@/public/icon/ArrowBottom";
import ArrowBottomWhite from "/public/icon/arrow_bottom_white.svg";

interface FilterButtonProps {
  type?: "default" | "selected" | "active";
  name: string;
  setShowSheet: React.Dispatch<React.SetStateAction<boolean>>;
}

function getArrowComponent(type: string) {
  switch (type) {
    case "selected":
      return <Close width={12} />;
    case "active":
      return <ArrowBottom width={12} color="white" />;
    default:
      return <ArrowBottom width={12} />;
  }
}

export function FilterButton({
  type = "default",
  name,
  setShowSheet,
}: FilterButtonProps) {
  return (
    <button
      onClick={() => {
        setShowSheet(true);
      }}
      className=" shrink-0"
    >
      <div
        className={`${style.filterButton} ${type === "default" ? "bg-grey-50" : "bg-primary-black"}`}
      >
        <p
          className={`text-xs font-medium ${type === "default" ? "text-grey-600" : "text-primary-white"}`}
        >
          {name}
        </p>
        {getArrowComponent(type)}
      </div>
    </button>
  );
}

interface SmallFilterButtonProps {
  type?: "default" | "selected" | "active";
  name: string;
}

function getSmallArrowComponent(type: string) {
  switch (type) {
    case "selected":
      return <Close width={10} color="#626262" />;
    case "active":
      return <ArrowBottom width={10} color="white" />;
    default:
      return <></>;
  }
}

export function FilterButtonSmall({
  type = "default",
  name,
}: SmallFilterButtonProps) {
  return (
    <button
      className=" shrink-0"
      onClick={() => {
        console.log("click");
      }}
    >
      <div
        className={`${style.filterButton} bg-primary-white border border-grey-200`}
      >
        <p className={`text-xs font-medium text-grey-600`}>{name}</p>
        {getSmallArrowComponent(type)}
      </div>
    </button>
  );
}
