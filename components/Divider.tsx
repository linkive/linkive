export const Divider = ({ height = 10 }: { height?: number }) => {
  return (
    <div
      style={{
        width: "100%",
        height: `${height}px`,
        backgroundColor: "var(--grey-50)",
      }}
    ></div>
  );
};

export default Divider;
