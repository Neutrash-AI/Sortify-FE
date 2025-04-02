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
      className={`inline-flex items-center md:gap-[1vw] lg:gap-[0.42vw] ${
        type === "DeviceConnection"
          ? "lg:absolute lg:left-[10.45vw] lg:top-[4.36vw] md:absolute md:left-[26.7vw] md:top-[10.1vw]"
          : " lg:absolute lg:left-[93.54vw] lg:top-[4.36vw] md:absolute md:left-[77.19vw] md:top-[10.1vw]"
      }`}
    >
      <Switch
        onChange={setMode}
        checked={mode}
        onColor="#4caf50"
        offColor="#ccc"
        uncheckedIcon={false}
        checkedIcon={false}
        className="lg:w-[4.5vw] lg:h-[2.2vw] 2xl:w-[3vw] 2xl:h-[1.35vw]"
      />
      <span className="md:text-[1.94vw] lg:text-[0.835vw] font-medium font-['Inter'] text-black dark:text-white">
        {type === "DeviceConnection" ? (
          mode ? (
            "Connected"
          ) : (
            "Disconnected"
          )
        ) : mode ? (
          <MdOutlineDarkMode className="md:w-[4.27vw] md:h-[4.27vw] lg:w-[1.84vw] lg:h-[1.84vw]" />
        ) : (
          <MdOutlineLightMode className="md:w-[4.27vw] md:h-[4.27vw] lg:w-[1.84vw] lg:h-[1.84vw]" />
        )}
      </span>
    </div>
  );
};

export default DesktopToggle;
