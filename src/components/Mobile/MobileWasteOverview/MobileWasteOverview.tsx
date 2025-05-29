// src/components/mobile/MobileWasteOverview.tsx

import MobileWasteListCard from "./MobileWasteListCard";

const MobileWasteOverview: React.FC = () => {
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
      <MobileWasteListCard desc1="Total Waste" value1={0} />
      <MobileWasteListCard
        desc1="Organic"
        value1={0}
        desc2="Recycle"
        value2={0}
      />
    </div>
  );
};

export default MobileWasteOverview;
