import Switch from "react-switch";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

interface MobileToggleProps {
  type: string;
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileToggle: React.FC<MobileToggleProps> = ({ type, mode, setMode }) => {
  return (
    <div
      data-state="On"
      className={`${
        type === "DeviceConnection"
          ? "w-[41.39vw] h-[6.85vw] pl-[4.17vw] left-0 top-0 absolute inline-flex justify-start items-center gap-[3vw]"
          : "w-[13.33vw] h-[7.22vw] left-[69vw] top-[-0.23vw] absolute inline-flex justify-start items-center gap-[3vw]"
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
      <span className="text-[3.8vw] font-medium font-['Inter'] text-black dark:text-white">
        {type === "DeviceConnection" ? (
          mode ? (
            "Connected"
          ) : (
            "Disconnected"
          )
        ) : mode ? (
          <MdOutlineDarkMode className="w-[9.72vw] h-[9.72vw]" />
        ) : (
          <MdOutlineLightMode className="w-[9.72vw] h-[9.72vw]" />
        )}
      </span>
    </div>
  );
};

export default MobileToggle;
