// src/components/mobile/MobileWasteBreakdown.tsx

const MobileWasteBreakdown: React.FC = () => {
  return (
    <div className="self-stretch px-3 flex flex-col justify-center items-center">
      <div className="self-stretch pt-4 inline-flex justify-start items-center gap-3">
        <div className="flex-1 inline-flex flex-col justify-start items-start">
          <div className="self-stretch relative justify-start dark:text-white text-black text-lg font-medium leading-normal">
            Waste Breakdown
          </div>
        </div>
      </div>
      {/* Contoh Recyclable */}
      <div className="self-stretch py-3 relative inline-flex justify-center items-center gap-2">
        <div className="w-8 h-8 relative bg-white dark:bg-[#1f0059] rounded-2xl">
          <div className="w-8 h-8 left-0 top-0 absolute text-center justify-center text-black text-xl font-normal leading-loose">
            🔄
          </div>
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start">
          <div className="self-stretch relative justify-start dark:text-white text-black text-sm font-normal leading-tight">
            Recyclable Waste
          </div>
        </div>
        <div className="relative text-right justify-start dark:text-white text-black text-sm font-medium leading-tight">
          70%
        </div>
      </div>
      {/* Contoh Non-Recyclable */}
      <div className="self-stretch py-3 relative inline-flex justify-center items-center gap-2">
        <div className="w-8 h-8 relative bg-white dark:bg-[#1f0059] rounded-2xl">
          <div className="w-8 h-8 left-0 top-0 absolute text-center justify-center text-black text-xl font-bold leading-loose">
            ⚠️
          </div>
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start">
          <div className="self-stretch relative justify-start dark:text-white text-black text-sm font-normal leading-tight">
            Non-Recyclable Waste
          </div>
        </div>
        <div className="relative text-right justify-start dark:text-white text-black text-sm font-bold leading-tight">
          30%
        </div>
      </div>
    </div>
  );
};

export default MobileWasteBreakdown;
