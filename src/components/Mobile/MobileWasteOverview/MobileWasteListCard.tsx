interface MobileWasteListCardProps {
  desc1: string;
  value1: number;
  desc2?: string;
  value2?: number;
}

import MobileWasteCard from "./MobileWasteCard";

const MobileWasteListCard: React.FC<MobileWasteListCardProps> = ({
  desc1,
  value1,
  desc2,
  value2,
}) => {
  return (
    <div className="self-stretch inline-flex justify-start items-start gap-[2.22vw]">
      <MobileWasteCard desc={desc1} value={value1} />
      {desc2 && value2 !== undefined ? (
        <MobileWasteCard desc={desc2} value={value2} />
      ) : null}
    </div>
  );
};

export default MobileWasteListCard;
