// src/components/desktop/DesktopSidebar.tsx

const DesktopSidebar: React.FC = () => {
  return (
    <div
      className="
        py-3 absolute left-0 top-[58px] inline-flex flex-col justify-start items-center overflow-hidden
        lg:w-[159px] lg:h-[1022px] lg:bg-white dark:bg-[#1f0059]
        md:w-[159px] md:h-[1122px] md:bg-white
      "
    >
      <div className="w-full px-5 py-4 inline-flex justify-center items-center gap-3">
        <div
          className="
            relative rounded-xl
            lg:w-5 lg:h-5 lg:bg-black/5 lg:dark:bg-[#0a0024]/50
            md:w-5 md:h-5 md:bg-black/5
          "
        >
          <div className="absolute left-[-2px] top-[-2px] w-6 h-6 flex items-center justify-center text-center text-black dark:text-white text-[15px] font-bold font-['Roboto']">
            📷
          </div>
        </div>
        <div
          className="
            flex-1 text-base font-medium font-['Roboto'] leading-tight
            lg:text-[#212121] dark:lg:text-[#e0e0e0]
            md:text-[#212121]
          "
        >
          Camera 1
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;
