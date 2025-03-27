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
          ? "w-[149px] h-[24.66px] pl-[15px] left-0 top-0 absolute inline-flex justify-start items-center"
          : "w-12 h-[26px] left-[258px] top-[-0.82px] absolute inline-flex justify-start items-center"
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

export default MobileToggle;
