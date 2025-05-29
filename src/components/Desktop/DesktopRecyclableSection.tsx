// src/components/desktop/DesktopRecyclableSection.tsx

import { GiRecycle } from "react-icons/gi";
import { FaTrash } from "react-icons/fa";

import { useGlobalState } from "../../context/useGlobalState";

const DesktopRecyclableSection: React.FC = () => {
  const { displaySidebar } = useGlobalState();
  return (
    <div
      className={`${
        displaySidebar
          ? "translate-x-0"
          : "md:-translate-x-[9vw] lg:-translate-x-[5vw]"
      } inline-flex flex-col justify-center items-center gap-[2.01vw]
        lg:w-[27.3vw] lg:absolute lg:left-[69.9vw] lg:top-[20.4vw]
         md:w-[63.4vw] md:absolute md:left-[25.5vw] md:top-[98vw]
         transform transition-transform duration-500 ease-in-out`}
    >
      <div className="w-full inline-flex justify-start items-center gap-[2.01vw]">
        {/* Recyclable Waste */}
        <div className="flex-1 py-[0.63vw] inline-flex flex-col justify-center items-center md:gap-[3vw] lg:gap-[1.05vw]">
          <div className="md:w-[12.2vw] lg:w-[5.2vw] aspect-square flex items-center justify-center bg-white dark:bg-[#1f0059] rounded-full border border-[#e6e6e6]">
            <GiRecycle className="md:text-[4.65vw] lg:text-[2vw] text-green-500 dark:text-white" />
          </div>
          <div className="w-full flex flex-col justify-start items-center gap-[0.42vw]">
            <div className="w-full text-center text-black dark:text-white md:text-[2.55vw] lg:text-[1.1vw] font-normal font-['Roboto'] leading-[1.47vw]">
              Recyclable Waste
            </div>
          </div>
          <div className="w-full text-center text-black dark:text-white md:text-[3.4vw] lg:text-[1.5vw] font-medium font-['Roboto'] leading-[1.89vw]">
            {0}%
          </div>
        </div>

        {/* Non-Recyclable Waste */}
        <div className="flex-1 py-[0.63vw] inline-flex flex-col justify-center items-center md:gap-[3vw] lg:gap-[1.05vw]">
          <div className="md:w-[12.2vw] lg:w-[5.2vw] aspect-square flex items-center justify-center bg-white dark:bg-[#1f0059] rounded-full border border-[#e6e6e6]">
            <FaTrash className="md:text-[4.65vw] lg:text-[2vw] text-red-500 dark:text-white" />
          </div>
          <div className="w-full flex flex-col justify-start items-center gap-[0.42vw]">
            <div className="w-full text-center text-black dark:text-white md:text-[2.55vw] lg:text-[1.1vw] font-normal font-['Roboto'] leading-[1.47vw]">
              Non-Recyclable Waste
            </div>
          </div>
          <div className="w-full text-center text-black dark:text-white md:text-[3.4vw] lg:text-[1.5vw] font-medium font-['Roboto'] leading-[1.89vw]">
            {0}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopRecyclableSection;
