// src/components/desktop/DesktopSidebar.tsx

import { useGlobalState } from "../../context/useGlobalState";

const MobileSidebar: React.FC = () => {
  const { displaySidebar } = useGlobalState();
  return (
    <div
      className={`${
        displaySidebar ? "translate-x-0" : "-translate-x-full"
      } py-[0.63vw] absolute left-0 top-[15vw] inline-flex flex-col justify-start items-center overflow-hidden
     h-screen bg-white dark:bg-[#1f0059] transform transition-transform duration-500 ease-in-out
    w-[40vw] border-r-[0.5vw] z-50`}
    >
      <div className="w-full px-[5.56vw]  py-[4.44vw]  inline-flex justify-center items-center gap-[2vw] cursor-pointer hover:bg-gray-200 dark:hover:bg-black">
        <div
          className="
        relative rounded-xl w-[5.56vw] aspect-square
      "
        >
          <div className="absolute left-[0.244vw] top-[1vw] w-[2.5vw] h-[2.5vw] flex items-center justify-center text-center text-black dark:text-white text-[4.56vw] font-bold font-['Roboto']">
            📷
          </div>
        </div>
        <div
          className="
        flex-1 text-[3.5vw]  font-medium font-['Roboto'] leading-tight
        text-[#212121] dark:text-[#e0e0e0]
       
      "
        >
          Camera 1
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
