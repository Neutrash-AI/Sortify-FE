interface MobileWasteBreakdownCardProps {
  logo: string;
  title: string;
  value: number;
}

const MobileWasteBreakdownCard: React.FC<MobileWasteBreakdownCardProps> = ({
  logo,
  title,
  value,
}) => {
  return (
    <div className="self-stretch py-[3.33vw] relative inline-flex justify-center items-center gap-[2.22vw]">
      <div className="w-[8.89vw] h-[8.89vw] relative bg-white dark:bg-[#1f0059] rounded-2xl">
        <div className="w-[8.89vw] h-[8.89vw] left-0 top-0 absolute text-center justify-center text-black text-[4.6vw] font-normal leading-loose">
          {logo}
        </div>
      </div>
      <div className="flex-1 inline-flex flex-col justify-start items-start">
        <div className="self-stretch relative justify-start dark:text-white text-black text-[3.5vw] font-normal leading-tight">
          {title}
        </div>
      </div>
      <div className="relative text-right justify-start dark:text-white text-black text-[3.5vw] font-medium leading-tight">
        {value}%
      </div>
    </div>
  );
};

export default MobileWasteBreakdownCard;
