import React from "react";
import "./button.css";

interface ButtonProps {
  /**
   * 버튼 배경 색상
   */
  backgroundColor?: string;
  /**
   * 버튼 종류 선택
   */
  mode: "active" | "alert" | "medium" | "large";
  /**
   * 버튼 레이블
   */
  label: string;
  /**
   * 버튼 클릭 핸들러
   */
  onClick?: () => void;
}

/**
 * 활성화 버튼 ui componenet
 */
export const Button = ({
  mode,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${mode}`].join(" ")}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
