// src/components/desktop/DesktopNavbar.tsx

const DesktopNavbar: React.FC = () => {
  return (
    <div
      className="
        p-5 absolute left-0 top-0 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)]
        inline-flex justify-center items-center gap-5 overflow-hidden
        lg:w-[1920px] lg:h-[58px] lg:bg-[#4caf50] dark:bg-[#0a0024]
        md:w-[820px] md:h-[58px] md:bg-[#4caf50]
      "
    >
      <div
        className="
              relative overflow-hidden
              lg:w-[22px] lg:h-6
              md:w-[22px] md:h-6
            "
      >
        <div
          className="
                absolute left-[3px]
                lg:top-[6px] md:top-[6px]
                lg:w-[15px] lg:h-0 lg:ring-2 lg:ring-white
                md:w-[15px] md:h-0 md:ring-2 md:ring-white
              "
        />
        <div
          className="
                absolute left-[3px]
                lg:top-[12px] md:top-[12px]
                lg:w-[15px] lg:h-0 lg:ring-2 lg:ring-white
                md:w-[15px] md:h-0 md:ring-2 md:ring-white
              "
        />
        <div
          className="
                absolute left-[3px]
                lg:top-[18px] md:top-[18px]
                lg:w-[15px] lg:h-0 lg:ring-2 lg:ring-white
                md:w-[15px] md:h-0 md:ring-2 md:ring-white
              "
        />
      </div>
      <div className="flex-1 relative text-white text-[28px] font-medium font-['Roboto'] leading-9">
        Sortify - Smart Bin
      </div>
    </div>
  );
};

export default DesktopNavbar;
