// src/components/desktop/DesktopNavbar.tsx
import Switch from "react-switch";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

interface DesktopNavbarProps {
  isConnected: boolean;
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({
  isConnected,
  setIsConnected,
  isDarkMode,
  setIsDarkMode,
}) => {
  return (
    <div
      className="
        p-5 absolute left-0 top-0 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)]
        inline-flex justify-center items-center gap-5 overflow-hidden
        lg:w-[1920px] lg:h-[58px] lg:bg-[#4caf50] dark:bg-[#0a0024]
        md:w-[820px] md:h-[58px] md:bg-[#4caf50]
      "
    >
      <div className="flex-1 relative text-white text-[28px] font-medium font-['Roboto'] leading-9">
        Sortify - Smart Bin
      </div>

      {/* Toggle Connection */}
      <div
        className="
          inline-flex items-center gap-2
          lg:absolute lg:left-[199px] lg:top-[83px]
          md:absolute md:left-[219px] md:top-[83px]
        "
      >
        <Switch
          onChange={setIsConnected}
          checked={isConnected}
          onColor="#4caf50"
          offColor="#ccc"
          uncheckedIcon={false}
          checkedIcon={false}
        />
        <span className="text-sm font-medium font-['Inter'] text-black dark:text-white">
          {isConnected ? "Connected" : "Disconnected"}
        </span>
      </div>

      {/* Toggle Dark/Light */}
      <div
        className="
          inline-flex items-center gap-2
          lg:absolute lg:left-[1783px] lg:top-[83px]
          md:absolute md:left-[633px] md:top-[83px]
        "
      >
        <Switch
          onChange={setIsDarkMode}
          checked={isDarkMode}
          onColor="#4caf50"
          offColor="#ccc"
          uncheckedIcon={false}
          checkedIcon={false}
        />
        <span className="text-sm font-medium text-black dark:text-white">
          {isDarkMode ? (
            <MdOutlineDarkMode className="w-[35px] h-[35px]" />
          ) : (
            <MdOutlineLightMode className="w-[35px] h-[35px]" />
          )}
        </span>
      </div>
    </div>
  );
};

export default DesktopNavbar;
