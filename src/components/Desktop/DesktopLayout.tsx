// src/components/desktop/DesktopLayout.tsx
import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import DesktopSidebar from "./DesktopSidebar";
import DesktopTotalWaste from "./DesktopTotalWaste";
import DesktopRecyclableSection from "./DesktopRecyclableSection";
import LiveCamera from "../LiveCamera";
import DesktopWasteCompotition from "./DesktopWasteCompotition";
import DesktopToggle from "./DesktopToggle";

interface DesktopLayoutProps {
  isConnected: boolean;
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  socketUrl: string;
}

const DesktopLayout: React.FC<DesktopLayoutProps> = ({
  isConnected,
  setIsConnected,
  isDarkMode,
  setIsDarkMode,
  socketUrl,
}) => {
  return (
    <main
      className="
      hidden md:block
      w-screen md:w-[43.1vw] lg:w-screen lg:min-h-screen
      min-h-[100vmax] relative lg:flex lg:flex-col lg:items-center lg:justify-center
      bg-[#f7f6f9] dark:bg-[#15003f]
      lg:overflow-hidden md:overflow-y-scroll
    "
    >
      {/* Navbar */}
      <DesktopNavbar />

      {/* Toggle Device Connection */}
      <DesktopToggle
        type="DeviceConnection"
        mode={isConnected}
        setMode={setIsConnected}
      />

      {/* Toggle Set Dark Mode */}
      <DesktopToggle
        type="SetDarkMode"
        mode={isDarkMode}
        setMode={setIsDarkMode}
      />

      {/* Sidebar */}
      <DesktopSidebar />

      {/* Live Camera */}
      <div
        className="
        rounded-md border dark:border-transparent border-[#e6e6e6]
        inline-flex justify-center items-center overflow-hidden
        lg:w-[27.3vw] lg:h-[31.3vw] lg:absolute lg:left-[10.5vw] lg:top-[12.2vw]
        md:w-[27.3vw] md:h-[24.1vw] md:absolute md:left-[11.5vw] md:top-[7.8vw]
      "
      >
        <LiveCamera socketUrl={socketUrl} width={520} height={400} />
      </div>

      {/* Total Waste */}
      <DesktopTotalWaste />

      {/* Waste Compotition */}
      <DesktopWasteCompotition />

      {/* Recyclable Section */}
      <DesktopRecyclableSection />
    </main>
  );
};

export default DesktopLayout;
