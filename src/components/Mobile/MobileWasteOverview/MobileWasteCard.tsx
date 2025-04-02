interface MobileWasteCardProps {
  desc: string;
  value: number;
}

const MobileWasteCard: React.FC<MobileWasteCardProps> = ({ desc, value }) => {
  return (
    <div className="flex-1 p-[3.33vw] bg-white dark:bg-transparent rounded-md border dark:border-white border-black inline-flex flex-col justify-start items-start gap-[1.11vw] overflow-hidden">
      <div className="self-stretch relative justify-start dark:text-[#e0e0e1] text-black text-[3.6vw] font-normal font-['Roboto'] leading-tight">
        {desc}
      </div>
      <div className="relative justify-start dark:text-white text-black text-[5.4vw] font-bold font-['Roboto'] leading-7">
        {value}
      </div>
    </div>
  );
};

export default MobileWasteCard;
