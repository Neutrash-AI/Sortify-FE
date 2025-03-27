// src/components/mobile/MobileWasteOverview.tsx

const MobileWasteOverview: React.FC = () => {
  return (
    <div className="self-stretch px-3 flex flex-col justify-center items-center gap-2 overflow-hidden">
      <div className="self-stretch pt-4 inline-flex justify-start items-center gap-3">
        <div className="flex-1 inline-flex flex-col justify-start items-start">
          <div className="self-stretch relative justify-start dark:text-white text-black text-lg font-medium leading-normal">
            Waste Overview
          </div>
          <div className="self-stretch relative justify-start dark:text-[#e0e0e1] text-black text-xs font-normal leading-none">
            Total Waste in Bin
          </div>
        </div>
      </div>

      {/* Contoh total waste */}
      <div className="self-stretch inline-flex justify-start items-start gap-2">
        <div className="flex-1 p-3 bg-white dark:bg-transparent rounded-md border dark:border-white border-black/10 inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
          <div className="self-stretch relative justify-start dark:text-[#e0e0e1] text-black text-sm font-normal leading-tight">
            Total Waste
          </div>
          <div className="relative justify-start dark:text-white text-black text-xl font-bold leading-7">
            5
          </div>
        </div>
        <div className="flex-1 p-3 bg-white dark:bg-transparent rounded-md border dark:border-white border-black/10 inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
          <div className="self-stretch relative justify-start dark:text-[#e0e0e1] text-black text-sm font-normal leading-tight">
            Plastic
          </div>
          <div className="relative justify-start dark:text-white text-black text-xl font-bold leading-7">
            1
          </div>
        </div>
      </div>
      {/* ... Lanjut Paper, Metal, Glass, Other */}
    </div>
  );
};

export default MobileWasteOverview;
