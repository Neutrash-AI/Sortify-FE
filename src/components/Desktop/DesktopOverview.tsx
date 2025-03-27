// src/components/desktop/DesktopOverview.tsx

const DesktopOverview: React.FC = () => {
  return (
    <div
      className="
        inline-flex flex-col justify-center items-center gap-10
        lg:w-[1100px] lg:absolute lg:left-[783px] lg:top-[232px]
        md:w-[520px] md:absolute md:left-[219px] md:top-[650px]
      "
    >
      <div className="w-full lg:inline-flex lg:justify-start lg:items-start lg:gap-5 md:grid md:grid-cols-3 md:gap-5">
        {["Total Waste", "Plastic", "Paper", "Metal", "Glass", "Other"].map(
          (label, idx) => (
            <div
              key={idx}
              className="
                flex-1 p-4 bg-white dark:bg-transparent rounded-md border
                border-black dark:border-white inline-flex flex-col
                justify-start items-start gap-1 overflow-hidden
              "
            >
              <div className="w-full text-black dark:text-[#e0e0e1] text-base font-normal font-['Roboto'] leading-normal">
                {label}
              </div>
              <div className="relative text-black dark:text-white text-[28px] font-medium font-['Roboto'] leading-9">
                {label === "Glass" ? 2 : label === "Other" ? 0 : 1}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default DesktopOverview;
