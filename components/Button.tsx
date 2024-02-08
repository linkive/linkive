interface ButtonXSProps {
  type?: "default" | "active";
  name: string;
}

export function ButtonXS({ type = "default", name }: ButtonXSProps) {
  return (
    <button
      className=" shrink-0"
      onClick={() => {
        console.log("click");
      }}
    >
      <div
        className={`${type === "default" ? "border border-grey-100 bg-primary-white" : "bg-primary-black"} flex px-2.5 py-1 justify-center items-center gap-1 rounded`}
      >
        <p
          className={`text-xs font-medium ${type === "default" ? "text-grey-600" : "text-primary-white"} `}
        >
          {name}
        </p>
      </div>
    </button>
  );
}
