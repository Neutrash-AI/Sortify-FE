const DesktopWasteCompotition = () => {
  return (
    <div
      className="
      hidden md:hidden lg:inline-flex
      lg:w-[493px] lg:h-[440px] lg:absolute lg:left-[783px] lg:top-[388px]
      flex-col justify-start items-start gap-1
    "
    >
      <div className="w-full flex-1 p-5 bg-white dark:bg-transparent rounded-md border border-black dark:border-[#d9d9d9] flex flex-col justify-start items-start gap-3">
        <div className="w-full text-black dark:text-white text-xl font-medium font-['Roboto'] leading-7">
          Waste Composition
        </div>
        <div className="w-full text-black dark:text-[#e0e0e1] text-base font-normal font-['Roboto'] leading-normal">
          Percentage
        </div>
        <div className="w-full flex-1 relative">
          <div className="w-[280px] h-[280px] absolute left-[87px] top-[4px] bg-black dark:bg-[#d9d9d9] rounded-full" />
          <div className="w-[280px] h-[280px] absolute left-[87px] top-[4px] bg-black dark:bg-white rounded-full" />
          <div className="w-[280px] h-[280px] absolute left-[87px] top-[4px] bg-black/50 rounded-full" />
        </div>
        <div className="w-full text-right text-black dark:text-[#e0e0e1] text-base font-normal font-['Roboto'] leading-normal">
          Types of Waste
        </div>
      </div>
    </div>
  );
};

export default DesktopWasteCompotition;
