const DesktopWasteCompotition = () => {
  return (
    <div
      className="
      hidden md:hidden lg:inline-flex
      lg:w-[25.9vw] lg:h-[23.1vw] lg:absolute lg:left-[41.1vw] lg:top-[20.4vw]
      flex-col justify-start items-start gap-[0.21vw]
    "
    >
      <div className="w-full flex-1 p-[1.05vw] bg-white dark:bg-transparent rounded-md border border-black dark:border-[#d9d9d9] flex flex-col justify-start items-start gap-[0.63vw]">
        <div className="w-full text-black dark:text-white text-[1.2vw] font-medium font-['Roboto'] leading-[1.47vw]">
          Waste Composition
        </div>
        <div className="w-full text-black dark:text-[#e0e0e1] text-[0.85vw] font-normal font-['Roboto'] leading-normal">
          Percentage
        </div>
        <div className="w-full flex-1 relative">
          <div className="w-[14.7vw] h-[14.7vw] absolute left-[4.57vw] top-[0.21vw] bg-black dark:bg-[#d9d9d9] rounded-full" />
          <div className="w-[14.7vw] h-[14.7vw] absolute left-[4.57vw] top-[0.21vw] bg-black dark:bg-white rounded-full" />
          <div className="w-[14.7vw] h-[14.7vw] absolute left-[4.57vw] top-[0.21vw] bg-black/50 rounded-full" />
        </div>
        <div className="w-full text-right text-black dark:text-[#e0e0e1] text-[0.85vw] font-normal font-['Roboto'] leading-normal">
          Types of Waste
        </div>
      </div>
    </div>
  );
};

export default DesktopWasteCompotition;
