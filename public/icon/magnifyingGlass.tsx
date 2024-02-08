type IconProps = {
  color?: string;
  width?: number;
};

const MagnifyingGlass = ({ color = "black", width = 24 }: IconProps) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 21L16.6569 16.6569M16.6569 16.6569C18.1046 15.2091 19 13.2091 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C13.2091 19 15.2091 18.1046 16.6569 16.6569Z"
        stroke={color}
        stroke-width="1.4"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default MagnifyingGlass;
