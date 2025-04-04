// src/components/mobile/MobileLayout.tsx
import MobileNavbar from "./MobileNavbar";
import MobileWasteOverview from "./MobileWasteOverview/MobileWasteOverview";
import MobileWasteBreakdown from "./MobileWasteBreakdown/MobileWasteBreakdown";
import MobileToggle from "./MobileToggle";
import LiveCamera from "../LiveCamera";
import MobileSidebar from "./MobileSidebar";

import { useGlobalState } from "../../context/useGlobalState";

const MobileLayout: React.FC = () => {
  const { isConnected, setIsConnected, isDarkMode, setIsDarkMode } =
    useGlobalState();
  return (
    <div className="md:hidden w-screen h-fit pb-[3.33vw] dark:bg-[#15003f] bg-[#f7f6f9] inline-flex flex-col justify-center items-start gap-[3.33vw] overflow-y-scroll">
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

      <MobileSidebar />

      {/* Contoh placeholder camera */}
      <div className="self-stretch h-[82.22vw] px-[3.33vw] inline-flex justify-start items-start overflow-hidden">
        <LiveCamera width={520} height={400} />
      </div>

      {/* Waste Overview */}
      <MobileWasteOverview />

      {/* Waste Breakdown */}
      <MobileWasteBreakdown />
    </div>
  );
};

export default MobileLayout;
