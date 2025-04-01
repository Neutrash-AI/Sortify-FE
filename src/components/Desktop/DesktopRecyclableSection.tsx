// src/components/desktop/DesktopRecyclableSection.tsx
import { GiRecycle } from "react-icons/gi";
import { FaTrash } from "react-icons/fa";

const DesktopRecyclableSection: React.FC = () => {
  return (
    <div
      className="
        inline-flex flex-col justify-center items-center gap-[2.01vw]
        lg:w-[27.3vw] lg:absolute lg:left-[69.9vw] lg:top-[20.4vw]
        md:w-[27.3vw] md:absolute md:left-[11.0vw] md:top-[47.2vw]
      "
    >
      <div className="w-full inline-flex justify-start items-center gap-[2.01vw]">
        {/* Recyclable Waste */}
        <div className="flex-1 py-[0.63vw] inline-flex flex-col justify-center items-center gap-[1.05vw]">
          <div className="w-[5.2vw] h-[5.2vw] flex items-center justify-center bg-white dark:bg-[#1f0059] rounded-full border border-[#e6e6e6]">
            <GiRecycle className="text-4xl text-green-500 dark:text-white" />
          </div>
          <div className="w-full flex flex-col justify-start items-center gap-[0.42vw]">
            <div className="w-full text-center text-black dark:text-white text-xl font-normal font-['Roboto'] leading-[1.47vw]">
              Recyclable Waste
            </div>
          </div>
          <div className="w-full text-center text-black dark:text-white text-[1.5vw] font-medium font-['Roboto'] leading-[1.89vw]">
            70%
          </div>
        </div>

        {/* Non-Recyclable Waste */}
        <div className="flex-1 py-[0.63vw] inline-flex flex-col justify-center items-center gap-[1.05vw]">
          <div className="w-[5.2vw] h-[5.2vw] flex items-center justify-center bg-white dark:bg-[#1f0059] rounded-full border border-[#e6e6e6]">
            <FaTrash className="text-4xl text-red-500 dark:text-white" />
          </div>
          <div className="w-full flex flex-col justify-start items-center gap-[0.42vw]">
            <div className="w-full text-center text-black dark:text-white text-xl font-normal font-['Roboto'] leading-[1.47vw]">
              Non-Recyclable Waste
            </div>
          </div>
          <div className="w-full text-center text-black dark:text-white text-[1.5vw] font-medium font-['Roboto'] leading-[1.89vw]">
            30%
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopRecyclableSection;
