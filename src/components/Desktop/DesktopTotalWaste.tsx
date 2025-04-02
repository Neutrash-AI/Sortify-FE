// src/components/desktop/DesktopTotalWaste.tsx

const DesktopTotalWaste: React.FC = () => {
  return (
    <div
      className="
      inline-flex flex-col justify-center items-center md:gap-[4.88vw] lg:gap-[2.10vw]
      lg:w-[57.66vw] lg:absolute lg:left-[41.10vw] lg:top-[12.17vw]
       md:w-[63.41vw] md:absolute md:left-[26.71vw] md:top-[79.27vw]
    "
    >
      <div className="w-full lg:inline-flex lg:justify-start lg:items-start lg:gap-[1.05vw] md:grid md:grid-cols-3 md:gap-[2.44vw]">
        {["Total Waste", "Plastic", "Paper", "Metal", "Glass", "Other"].map(
          (label, idx) => (
            <div
              key={idx}
              className="
              flex-1 md:p-[1.95vw] lg:p-[0.84vw] bg-white dark:bg-transparent rounded-md border
              border-black dark:border-white inline-flex flex-col
              justify-start items-start md:gap-[0.49vw] lg:gap-[0.21vw] overflow-hidden
            "
            >
              <div className="w-full text-black dark:text-[#e0e0e1] md:text-[2.07vw] lg:text-[0.9vw] font-normal font-['Roboto'] leading-normal">
                {label}
              </div>
              <div className="relative text-black dark:text-white md:text-[3.4vw] lg:text-[1.47vw] font-medium font-['Roboto'] md:leading-[4.39vw] lg:leading-[1.89vw]">
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
