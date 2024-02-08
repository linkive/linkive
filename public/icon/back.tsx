type IconProps = {
  color?: string;
  width?: number;
};

const Back = ({ color = "black", width = 24 }: IconProps) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 4L8 12L16 20"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Back;
