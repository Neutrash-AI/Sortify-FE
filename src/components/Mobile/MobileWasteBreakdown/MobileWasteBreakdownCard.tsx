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
    <div className="self-stretch py-3 relative inline-flex justify-center items-center gap-2">
      <div className="w-8 h-8 relative bg-white dark:bg-[#1f0059] rounded-2xl">
        <div className="w-8 h-8 left-0 top-0 absolute text-center justify-center text-black text-xl font-normal leading-loose">
          {logo}
        </div>
      </div>
      <div className="flex-1 inline-flex flex-col justify-start items-start">
        <div className="self-stretch relative justify-start dark:text-white text-black text-sm font-normal leading-tight">
          {title}
        </div>
      </div>
      <div className="relative text-right justify-start dark:text-white text-black text-sm font-medium leading-tight">
        {value}%
      </div>
    </div>
  );
};

export default MobileWasteBreakdownCard;
