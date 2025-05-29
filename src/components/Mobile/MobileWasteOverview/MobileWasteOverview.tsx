// src/components/mobile/MobileWasteOverview.tsx

import { useGlobalState } from "../../../context/useGlobalState";

import MobileWasteListCard from "./MobileWasteListCard";

const MobileWasteOverview: React.FC = () => {
  const { totalCount, organicCount, recycleCount } = useGlobalState();

  return (
    <div className="self-stretch px-[3.33vw] flex flex-col justify-center items-center gap-[2.22vw] overflow-hidden">
      <div className="self-stretch pt-[4.44vw] inline-flex justify-start items-center gap-[3.33vw]">
        <div className="flex-1 inline-flex flex-col justify-start items-start">
          <div className="self-stretch relative justify-start dark:text-white text-black text-[6vw] font-medium font-['Roboto'] leading-normal">
            Waste Overview
          </div>
          <div className="self-stretch relative justify-start dark:text-[#e0e0e1] text-black text-[3.1vw] font-normal font-['Roboto'] leading-none">
            Total Waste in Bin
          </div>
        </div>
      </div>
      <MobileWasteListCard desc1="Total Waste" value1={totalCount} />
      <MobileWasteListCard
        desc1="Organic"
        value1={organicCount}
        desc2="Recycle"
        value2={recycleCount}
      />
    </div>
  );
};

export default MobileWasteOverview;
