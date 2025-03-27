// src/components/desktop/DesktopLayout.tsx
import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import DesktopSidebar from "./DesktopSidebar";
import DesktopTotalWaste from "./DesktopTotalWaste";
import DesktopRecyclableSection from "./DesktopRecyclableSection";
import LiveCamera from "../LiveCamera";
import DesktopWasteCompotition from "./DesktopWasteCompotition";

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
        w-screen md:w-[820px] lg:w-screen lg:min-h-screen
        min-h-[100vmax] relative lg:flex lg:flex-col lg:items-center lg:justify-center
        bg-[#f7f6f9] dark:bg-[#15003f]
        lg:overflow-hidden md:overflow-y-scroll
      "
    >
      {/* Navbar */}
      <DesktopNavbar
        isConnected={isConnected}
        setIsConnected={setIsConnected}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Sidebar */}
      <DesktopSidebar />

      {/* Live Camera */}
      <div
        className="
          rounded-md border dark:border-transparent border-[#e6e6e6]
          inline-flex justify-center items-center overflow-hidden
          lg:w-[520px] lg:h-[596px] lg:absolute lg:left-[199px] lg:top-[232px]
          md:w-[520px] md:h-[458px] md:absolute md:left-[219px] md:top-[149px]
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
