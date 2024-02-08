import { useState } from "react";
import OrderFilterPage from "./OrderFilterPage";
import PriceFilterPage from "./PriceFilterPage";

const filterSection = ["색상", "가격", "계절"];

const FilterContent = ({ section }: { section: string }) => {
  return (
    <>
      {(() => {
        switch (section) {
          case filterSection[1]:
            return <PriceFilterPage />;
          default:
            return <div>{section}</div>;
        }
      })()}
    </>
  );
};

export default function FilterSheet() {
  const [selectedFilterSection, setSelectedFilterSection] = useState(
    filterSection[0]
  );
  return (
    <div className={`flex flex-col w-full h-full bg-primary-white`}>
      <div className="flex w-full h-[56px] px-[18px] py-5 gap-[30px] border-b-[1px] border-grey-50">
        {filterSection.map((filterSection, idx) => (
          <button
            onClick={() => {
              setSelectedFilterSection(filterSection);
            }}
            className="relative flex gap-1"
          >
            <span
              className={`${filterSection === selectedFilterSection ? "text-primary-black" : "text-grey-100"}  text-base font-bold   ${true && "after:content-[''] after:w-1 after:h-1 after:absolute after:top-0 after:rounded-sm  after:bg-primary-red "}`}
            >
              {filterSection}
            </span>
          </button>
        ))}
      </div>
      <div className="flex flex-col w-full h-[178px]  px-[18px] ">
        <FilterContent section={selectedFilterSection} />
      </div>
      <div className="flex flex-col w-full h-[54px]  px-[18px] ">
        {/* TODO: EntireFilter */}
      </div>
      <div className="flex w-full h-[71px] px-[18px] justify-between items-end">
        <div className="flex w-40 h-12 justify-center items-center gap-2.5 rounded-md bg-primary-white border border-grey-100">
          <span className=" text-base font-medium text-grey-500">초기화</span>
        </div>
        <div className="flex w-40 h-12 justify-center items-center gap-2.5 rounded-md bg-primary-black">
          <span className=" text-base font-medium text-primary-white">
            적용
          </span>
        </div>
      </div>
      <div className="flex w-full flex-grow" />
    </div>
  );
}
