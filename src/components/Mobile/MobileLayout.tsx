// src/components/mobile/MobileLayout.tsx
import MobileNavbar from "./MobileNavbar";
import MobileWasteOverview from "./MobileWasteOverview/MobileWasteOverview";
import MobileWasteBreakdown from "./MobileWasteBreakdown/MobileWasteBreakdown";
import MobileToggle from "./MobileToggle";
import LiveCamera from "../LiveCamera";

interface MobileLayoutProps {
  isConnected: boolean;
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  socketUrl: string;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({
  isConnected,
  setIsConnected,
  isDarkMode,
  setIsDarkMode,
  socketUrl,
}) => {
  return (
    <div className="md:hidden w-[360px] h-[922px] pb-3 dark:bg-[#15003f] bg-[#f7f6f9] inline-flex flex-col justify-center items-start gap-3">
      {/* Navbar Mobile */}
      <MobileNavbar />
      <div className="w-[348px] h-[34px] relative">
        {/* Toggles */}
        <MobileToggle
          type="DeviceConnection"
          mode={isConnected}
          setMode={setIsConnected}
        />
        <MobileToggle
          type="SetDarkMode"
          mode={isDarkMode}
          setMode={setIsDarkMode}
        />
      </div>

      {/* Contoh placeholder camera */}
      <div className="self-stretch h-[296px] px-3 inline-flex justify-start items-start overflow-hidden">
        <LiveCamera socketUrl={socketUrl} width={520} height={400} />
      </div>

      {/* Waste Overview */}
      <MobileWasteOverview />

      {/* Waste Breakdown */}
      <MobileWasteBreakdown />
    </div>
  );
};

export default MobileLayout;
