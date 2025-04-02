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
      className={`inline-flex items-center gap-[0.42vw] ${
        type === "DeviceConnection"
          ? "lg:absolute lg:left-[10.45vw] lg:top-[4.36vw] md:absolute md:left-[11.49vw] md:top-[4.36vw]"
          : " lg:absolute lg:left-[93.54vw] lg:top-[4.36vw] md:absolute md:left-[33.23vw] md:top-[4.36vw]"
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
      <span className="text-[0.835vw] font-medium font-['Inter'] text-black dark:text-white">
        {type === "DeviceConnection" ? (
          mode ? (
            "Connected"
          ) : (
            "Disconnected"
          )
        ) : mode ? (
          <MdOutlineDarkMode className="w-[1.84vw] h-[1.84vw]" />
        ) : (
          <MdOutlineLightMode className="w-[1.84vw] h-[1.84vw]" />
        )}
      </span>
    </div>
  );
};

export default DesktopToggle;
