// src/components/mobile/MobileWasteBreakdown.tsx
import MobileWasteBreakdownCard from "./MobileWasteBreakdownCard";

const MobileWasteBreakdown: React.FC = () => {
  return (
    <div className="self-stretch px-[3.33vw] flex flex-col justify-center items-center">
      <div className="self-stretch pt-[4.44vw] inline-flex justify-start items-center gap-[3.33vw]">
        <div className="flex-1 inline-flex flex-col justify-start items-start">
          <div className="self-stretch relative justify-start dark:text-white text-black text-[4.85vw] font-medium leading-normal">
            Waste Breakdown
          </div>
        </div>
      </div>
      {/* Contoh Recyclable */}
      <MobileWasteBreakdownCard logo="🔄" title="Recyclable Waste" value={70} />
      {/* Contoh Non-Recyclable */}
      <MobileWasteBreakdownCard
        logo="⚠️"
        title="Non-Recyclable Waste"
        value={30}
      />
    </div>
  );
};

export default MobileWasteBreakdown;
