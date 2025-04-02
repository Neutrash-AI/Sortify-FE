// src/components/desktop/DesktopSidebar.tsx

const DesktopSidebar: React.FC = () => {
  return (
    <div
      className="
    py-[0.63vw] absolute left-0 top-[3.04vw] inline-flex flex-col justify-start items-center overflow-hidden
    lg:w-[8.34vw] lg:h-[53.66vw] lg:bg-white dark:bg-[#1f0059]
    md:w-[8.34vw] md:h-[58.90vw] md:bg-white
  "
    >
      <div className="w-full px-[1.05vw] py-[0.84vw] inline-flex justify-center items-center gap-[0.63vw]">
        <div
          className="
        relative rounded-xl
        lg:w-[1.05vw] lg:h-[1.05vw] 
        md:w-[1.05vw] md:h-[1.05vw] 
      "
        >
          <div className="absolute left-[-0.11vw] top-[-0.11vw] w-[1.26vw] h-[1.26vw] flex items-center justify-center text-center text-black dark:text-white text-[0.79vw] font-bold font-['Roboto']">
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
