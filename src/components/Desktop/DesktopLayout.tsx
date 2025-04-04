// src/components/desktop/DesktopLayout.tsx
import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import DesktopSidebar from "./DesktopSidebar";
import DesktopTotalWaste from "./DesktopTotalWaste";
import DesktopRecyclableSection from "./DesktopRecyclableSection";
import LiveCamera from "../LiveCamera";
import DesktopWasteCompotition from "./DesktopWasteCompotition";
import DesktopToggle from "./DesktopToggle";

import { useGlobalState } from "../../context/useGlobalState";

const DesktopLayout: React.FC = () => {
  const {
    isConnected,
    setIsConnected,
    isDarkMode,
    setIsDarkMode,
    displaySidebar,
  } = useGlobalState();
  return (
    <main
      className="
      hidden md:block
      w-screen lg:min-h-screen
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
        className={`${
          displaySidebar ? "translate-x-0" : "md:-translate-x-[9vw] lg:-translate-x-[5vw]"
        }  rounded-md border dark:border-transparent border-[#e6e6e6]
        inline-flex justify-center items-center overflow-hidden
        lg:w-[27.3vw] lg:h-[31.3vw] lg:absolute lg:left-[10.5vw] lg:top-[12.2vw]
        md:w-[63.4vw] md:h-[55.83vw] md:absolute md:left-[26.71vw] md:top-[18.17vw] transform transition-transform duration-500 ease-in-out`}
      >
        <LiveCamera width={520} height={400} />
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
