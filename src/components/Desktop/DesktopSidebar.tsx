// src/components/desktop/DesktopSidebar.tsx

import { useGlobalState } from "../../context/useGlobalState";

const DesktopSidebar: React.FC = () => {
  const { displaySidebar } = useGlobalState();
  return (
    <div
      className={`${
        displaySidebar ? "translate-x-0" : "-translate-x-full"
      } py-[0.63vw] absolute left-0 md:top-[7.07vw] lg:top-[3.04vw] inline-flex flex-col justify-start items-center overflow-hidden
    lg:w-[8.34vw] h-screen lg:bg-white dark:bg-[#1f0059] transform transition-transform duration-500 ease-in-out
    md:w-[19.39vw] md:bg-white`}
    >
      <div className="w-full md:px-[2.44vw] lg:px-[1.05vw] md:py-[1.95vw] lg:py-[0.84vw] inline-flex justify-center items-center gap-[0.63vw] cursor-pointer hover:bg-gray-200 dark:hover:bg-black">
        <div
          className="
        relative rounded-xl
        lg:w-[1.05vw]  
        md:w-[2.44vw] aspect-square
      "
        >
          <div className="absolute md:left-[-0.244vw] lg:left-[-0.11vw] md:top-[0.4vw] lg:top-[-0.11vw] w-[1.26vw] h-[1.26vw] flex items-center justify-center text-center text-black dark:text-white md:text-[2vw] lg:text-[0.79vw] font-bold font-['Roboto']">
            📷
          </div>
        </div>
        <div
          className="
        flex-1 md:text-[1.94vw] lg:text-[0.835vw] font-medium font-['Roboto'] leading-tight
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
