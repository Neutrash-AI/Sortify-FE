// src/components/mobile/MobileNavbar.tsx
import Switch from "react-switch";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

interface MobileNavbarProps {
  isConnected: boolean;
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  isConnected,
  setIsConnected,
  isDarkMode,
  setIsDarkMode,
}) => {
  return (
    <div className="self-stretch dark:bg-[#0a0024] bg-[#4caf50] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)] flex flex-col justify-start items-start">
      <div className="self-stretch pl-4 pr-2 py-3 inline-flex justify-start items-center gap-2">
        <div className="w-[22px] h-6 relative overflow-hidden">
          <div className="w-[15px] h-0 left-[3px] top-[6px] absolute ring-2 ring-white" />
          <div className="w-[15px] h-0 left-[3px] top-[12px] absolute ring-2 ring-white" />
          <div className="w-[15px] h-0 left-[3px] top-[18px] absolute ring-2 ring-white" />
        </div>
        <div className="flex-1 relative justify-start text-white text-xl font-bold leading-normal">
          Sortify - Smart Bin
        </div>
      </div>

      {/* Toggles */}
      <div className="w-[348px] h-[34px] relative px-4 pb-2">
        <div
          data-state="On"
          className="w-[149px] h-[24.66px] pl-[15px] left-0 top-0 absolute inline-flex justify-start items-center"
        >
          <Switch
            onChange={setIsConnected}
            checked={isConnected}
            onColor="#4caf50"
            offColor="#ccc"
            uncheckedIcon={false}
            checkedIcon={false}
          />
          <span className="text-sm font-medium text-black dark:text-white ml-2">
            {isConnected ? "Connected" : "Disconnected"}
          </span>
        </div>
        <div
          data-state="On"
          className="w-12 h-[26px] left-[258px] top-0 absolute inline-flex justify-start items-center"
        >
          <Switch
            onChange={setIsDarkMode}
            checked={isDarkMode}
            onColor="#4caf50"
            offColor="#ccc"
            uncheckedIcon={false}
            checkedIcon={false}
          />
          <span className="text-sm font-medium text-black dark:text-white ml-2">
            {isDarkMode ? (
              <MdOutlineDarkMode className="w-[25px] h-[25px]" />
            ) : (
              <MdOutlineLightMode className="w-[25px] h-[25px]" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
