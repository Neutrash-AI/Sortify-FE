// src/components/mobile/MobileNavbar.tsx

const MobileNavbar: React.FC = () => {
  return (
    <div className="self-stretch dark:bg-[#0a0024] bg-[#4caf50] shadow-[0vw_0vw_1.67vw_0vw_rgba(0,0,0,0.12)] flex flex-col justify-start items-start">
      <div className="self-stretch pl-[4.44vw] pr-[2.22vw] py-[3.33vw] inline-flex justify-start items-center gap-[2.22vw]">
        <div className="w-[6.11vw] h-[6.67vw] relative overflow-hidden">
          <div className="w-[4.17vw] h-0 left-[0.83vw] top-[1.67vw] absolute ring-[0.35vw] ring-white" />
          <div className="w-[4.17vw] h-0 left-[0.83vw] top-[3.26vw] absolute ring-[0.35vw] ring-white" />
          <div className="w-[4.17vw] h-0 left-[0.83vw] top-[5.00vw] absolute ring-[0.35vw] ring-white" />
        </div>
        <div className="flex-1 relative justify-start text-white text-[5.4vw] font-bold font-['Roboto'] leading-normal">
          Sortify - Smart Bin
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
