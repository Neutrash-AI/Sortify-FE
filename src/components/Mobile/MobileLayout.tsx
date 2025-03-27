// src/components/mobile/MobileLayout.tsx
import React from "react";
import MobileNavbar from "./MobileNavbar";
import MobileWasteOverview from "./MobileWasteOverview";
import MobileWasteBreakdown from "./MobileWasteBreakdown";

interface MobileLayoutProps {
  isConnected: boolean;
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({
  isConnected,
  setIsConnected,
  isDarkMode,
  setIsDarkMode,
}) => {
  return (
    <div className="md:hidden w-[360px] h-[922px] pb-3 dark:bg-[#15003f] bg-[#f7f6f9] inline-flex flex-col justify-center items-start gap-3">
      {/* Navbar Mobile */}
      <MobileNavbar
        isConnected={isConnected}
        setIsConnected={setIsConnected}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Contoh placeholder camera */}
      <div className="self-stretch h-[296px] px-3 inline-flex justify-start items-start overflow-hidden">
        <div className="flex-1 h-[296px] relative dark:bg-[#1f0059] bg-white rounded-md border border-[#e6e6e6] dark:border-transparent">
          <div className="w-[304px] h-4 left-[16px] top-[140px] absolute text-center justify-center dark:text-white text-black text-base font-bold">
            Live Camera (mobile)
          </div>
        </div>
      </div>

      {/* Waste Overview */}
      <MobileWasteOverview />

      {/* Waste Breakdown */}
      <MobileWasteBreakdown />
    </div>
  );
};

export default MobileLayout;
