// src/components/mobile/MobileNavbar.tsx

const MobileNavbar: React.FC = () => {
  return (
    <div className="self-stretch dark:bg-[#0a0024] bg-[#4caf50] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)] flex flex-col justify-start items-start">
      <div className="self-stretch pl-4 pr-2 py-3 inline-flex justify-start items-center gap-2">
        <div className="w-[22px] h-6 relative overflow-hidden">
          <div className="w-[15px] h-0 left-[3px] top-[6px] absolute ring-2 ring-white" />
          <div className="w-[15px] h-0 left-[3px] top-[12px] absolute ring-2 ring-white" />
          <div className="w-[15px] h-0 left-[3px] top-[18px] absolute ring-2 ring-white" />
        </div>
        <div className="flex-1 relative justify-start text-white text-xl font-bold font-['Roboto'] leading-normal">
          Sortify - Smart Bin
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
