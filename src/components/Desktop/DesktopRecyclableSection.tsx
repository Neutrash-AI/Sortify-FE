// src/components/desktop/DesktopRecyclableSection.tsx
import { GiRecycle } from "react-icons/gi";
import { FaTrash } from "react-icons/fa";

const DesktopRecyclableSection: React.FC = () => {
  return (
    <div
      className="
        inline-flex flex-col justify-center items-center gap-10
        lg:w-[520px] lg:absolute lg:left-[1333px] lg:top-[388px]
        md:w-[520px] md:absolute md:left-[209px] md:top-[900px]
      "
    >
      <div className="w-full inline-flex justify-start items-center gap-10">
        {/* Recyclable Waste */}
        <div className="flex-1 py-3 inline-flex flex-col justify-center items-center gap-5">
          <div className="w-[100px] h-[100px] flex items-center justify-center bg-white dark:bg-[#1f0059] rounded-full border border-[#e6e6e6]">
            <GiRecycle className="text-4xl text-green-500 dark:text-white" />
          </div>
          <div className="w-full flex flex-col justify-start items-center gap-2">
            <div className="w-full text-center text-black dark:text-white text-xl font-normal font-['Roboto'] leading-7">
              Recyclable Waste
            </div>
          </div>
          <div className="w-full text-center text-black dark:text-white text-[28px] font-medium font-['Roboto'] leading-9">
            70%
          </div>
        </div>

        {/* Non-Recyclable Waste */}
        <div className="flex-1 py-3 inline-flex flex-col justify-center items-center gap-5">
          <div className="w-[100px] h-[100px] flex items-center justify-center bg-white dark:bg-[#1f0059] rounded-full border border-[#e6e6e6]">
            <FaTrash className="text-4xl text-red-500 dark:text-white" />
          </div>
          <div className="w-full flex flex-col justify-start items-center gap-2">
            <div className="w-full text-center text-black dark:text-white text-xl font-normal font-['Roboto'] leading-7">
              Non-Recyclable Waste
            </div>
          </div>
          <div className="w-full text-center text-black dark:text-white text-[28px] font-medium font-['Roboto'] leading-9">
            30%
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopRecyclableSection;
