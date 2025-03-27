import Switch from "react-switch";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

interface DesktopToggleProps {
  type: string;
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DesktopToggle: React.FC<DesktopToggleProps> = ({
  type,
  mode,
  setMode,
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 ${
        type === "DeviceConnection"
          ? "lg:absolute lg:left-[199px] lg:top-[83px] md:absolute md:left-[219px] md:top-[83px]"
          : " lg:absolute lg:left-[1783px] lg:top-[83px] md:absolute md:left-[633px] md:top-[83px]"
      }`}
    >
      <Switch
        onChange={setMode}
        checked={mode}
        onColor="#4caf50"
        offColor="#ccc"
        uncheckedIcon={false}
        checkedIcon={false}
      />
      <span className="text-sm font-medium font-['Inter'] text-black dark:text-white">
        {type === "DeviceConnection" ? (
          mode ? (
            "Connected"
          ) : (
            "Disconnected"
          )
        ) : mode ? (
          <MdOutlineDarkMode className="w-[35px] h-[35px]" />
        ) : (
          <MdOutlineLightMode className="w-[35px] h-[35px]" />
        )}
      </span>
    </div>
  );
};

export default DesktopToggle;
