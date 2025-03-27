// src/components/mobile/MobileWasteOverview.tsx

import MobileWasteListCard from "./MobileWasteListCard";

const MobileWasteOverview: React.FC = () => {
  return (
    <div className="self-stretch px-3 flex flex-col justify-center items-center gap-2 overflow-hidden">
      <div className="self-stretch pt-4 inline-flex justify-start items-center gap-3">
        <div className="flex-1 inline-flex flex-col justify-start items-start">
          <div className="self-stretch relative justify-start dark:text-white text-black text-lg font-medium font-['Roboto'] leading-normal">
            Waste Overview
          </div>
          <div className="self-stretch relative justify-start dark:text-[#e0e0e1] text-black text-xs font-normal font-['Roboto'] leading-none">
            Total Waste in Bin
          </div>
        </div>
      </div>
      <MobileWasteListCard
        desc1="Total Waste"
        value1={5}
        desc2="Plastic"
        value2={1}
      />
      <MobileWasteListCard desc1="Paper" value1={1} desc2="Metal" value2={1} />
      <MobileWasteListCard desc1="Glass" value1={2} desc2="Other" value2={0} />
    </div>
  );
};

export default MobileWasteOverview;
