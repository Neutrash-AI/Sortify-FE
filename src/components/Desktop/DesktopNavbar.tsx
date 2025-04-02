// src/components/desktop/DesktopNavbar.tsx

import { useGlobalState } from "../../context/useGlobalState";

const DesktopNavbar: React.FC = () => {
  const { setDisplaySidebar } = useGlobalState();
  return (
    <div
      className="
      p-[1.05vw] absolute left-0 top-0 shadow-[0vw_0vw_0.3vw_0vw_rgba(0,0,0,0.12)]
      inline-flex justify-center items-center gap-[1.05vw] overflow-hidden
      w-[100vw] lg:h-[3.0vw] lg:bg-[#4caf50] dark:bg-[#0a0024]
       md:h-[7.07vw] md:bg-[#4caf50]
    "
    >
      <div
        className="
            relative overflow-hidden
            lg:w-[1.2vw] lg:h-[1.26vw]
            md:w-[2.68vw] md:h-[2.92vw]
            cursor-pointer
          "
        onClick={() => setDisplaySidebar((prev) => !prev)}
      >
        <div
          className="
              absolute left-[0.2vw]
              lg:top-[0.3vw] md:top-[0.6vw]
              lg:w-[0.8vw] lg:h-0 lg:ring-[0.1vw] lg:ring-white
              md:w-[1.83vw] md:h-0 md:ring-[0.2vw] md:ring-white
            "
        />
        <div
          className="
         absolute left-[0.2vw]
         lg:top-[0.7vw] md:top-[1.4vw]
         lg:w-[0.8vw] lg:h-0 lg:ring-[0.1vw] lg:ring-white
         md:w-[1.83vw] md:h-0 md:ring-[0.2vw] md:ring-white
       "
        />
        <div
          className="
         absolute left-[0.2vw]
         lg:top-[1.1vw] md:top-[2.2vw]
         lg:w-[0.8vw] lg:h-0 lg:ring-[0.1vw] lg:ring-white
         md:w-[1.83vw] md:h-0 md:ring-[0.2vw] md:ring-white
       "
        />
      </div>
      <div className="flex-1 relative text-white md:text-[3.4vw] lg:text-[1.5vw] font-medium font-['Roboto'] md:leading-[4.39vw] lg:leading-[1.89vw]">
        Sortify - Smart Bin
      </div>
    </div>
  );
};

export default DesktopNavbar;
