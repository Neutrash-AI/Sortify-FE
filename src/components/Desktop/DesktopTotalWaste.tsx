// src/components/desktop/DesktopTotalWaste.tsx

const DesktopTotalWaste: React.FC = () => {
  return (
    <div
      className="
      inline-flex flex-col justify-center items-center gap-[2.10vw]
      lg:w-[57.66vw] lg:absolute lg:left-[41.10vw] lg:top-[12.17vw]
      md:w-[27.3vw] md:absolute md:left-[11.49vw] md:top-[34.14vw]
    "
    >
      <div className="w-full lg:inline-flex lg:justify-start lg:items-start lg:gap-[1.05vw] md:grid md:grid-cols-3 md:gap-[1.05vw]">
        {["Total Waste", "Plastic", "Paper", "Metal", "Glass", "Other"].map(
          (label, idx) => (
            <div
              key={idx}
              className="
              flex-1 p-[0.84vw] bg-white dark:bg-transparent rounded-md border
              border-black dark:border-white inline-flex flex-col
              justify-start items-start gap-[0.21vw] overflow-hidden
            "
            >
              <div className="w-full text-black dark:text-[#e0e0e1] text-[0.9vw] font-normal font-['Roboto'] leading-normal">
                {label}
              </div>
              <div className="relative text-black dark:text-white text-[1.47vw] font-medium font-['Roboto'] leading-[1.89vw]">
                {label === "Glass" ? 2 : label === "Other" ? 0 : 1}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default DesktopTotalWaste;
