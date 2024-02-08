type IconProps = {
  color?: string;
  width?: number;
};

const ArrowBottom = ({ color = "#626262", width = 10 }: IconProps) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 4L6 8L10 4"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowBottom;
