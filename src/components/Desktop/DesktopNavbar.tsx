// src/components/desktop/DesktopNavbar.tsx

const DesktopNavbar: React.FC = () => {
  return (
    <div
      className="
      p-5 absolute left-0 top-0 shadow-[0vw_0vw_0.3vw_0vw_rgba(0,0,0,0.12)]
      inline-flex justify-center items-center gap-5 overflow-hidden
      lg:w-[100.8vw] lg:h-[3.0vw] lg:bg-[#4caf50] dark:bg-[#0a0024]
      md:w-[43.1vw] md:h-[3.0vw] md:bg-[#4caf50]
    "
    >
      <div
        className="
            relative overflow-hidden
            lg:w-[1.2vw] lg:h-6
            md:w-[1.2vw] md:h-6
          "
      >
        <div
          className="
              absolute left-[0.2vw]
              lg:top-[0.3vw] md:top-[0.3vw]
              lg:w-[0.8vw] lg:h-0 lg:ring-2 lg:ring-white
              md:w-[0.8vw] md:h-0 md:ring-2 md:ring-white
            "
        />
        <div
          className="
              absolute left-[0.2vw]
              lg:top-[0.6vw] md:top-[0.6vw]
              lg:w-[0.8vw] lg:h-0 lg:ring-2 lg:ring-white
              md:w-[0.8vw] md:h-0 md:ring-2 md:ring-white
            "
        />
        <div
          className="
              absolute left-[0.2vw]
              lg:top-[0.9vw] md:top-[0.9vw]
              lg:w-[0.8vw] lg:h-0 lg:ring-2 lg:ring-white
              md:w-[0.8vw] md:h-0 md:ring-2 md:ring-white
            "
        />
      </div>
      <div className="flex-1 relative text-white text-[1.5vw] font-medium font-['Roboto'] leading-9">
        Sortify - Smart Bin
      </div>
    </div>
  );
};

export default DesktopNavbar;
