type IconProps = {
  color?: string;
  width?: number;
};

const Close = ({ color = "white", width = 12 }: IconProps) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox={`0 0 12 12`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 10L2 2"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 2L2 10"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Close;
