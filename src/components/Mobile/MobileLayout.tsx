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
    <div className="md:hidden w-screen h-[256.11vw] pb-[3.33vw] dark:bg-[#15003f] bg-[#f7f6f9] inline-flex flex-col justify-center items-start gap-[3.33vw]">
      {/* Navbar Mobile */}
      <MobileNavbar />
      <div className="w-[96.67vw] h-[9.44vw] relative">
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
      <div className="self-stretch h-[82.22vw] px-[3.33vw] inline-flex justify-start items-start overflow-hidden">
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
