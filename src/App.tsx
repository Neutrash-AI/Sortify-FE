import { useState, useEffect } from "react";
import Switch from "react-switch";
import { GiRecycle } from "react-icons/gi";
import { FaTrash } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

function App() {
  // State untuk toggle koneksi dan dark mode
  const [isConnected, setIsConnected] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efek dark mode: menambahkan/ menghapus class 'dark' di <html>
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <main className="lg:min-h-screen min-h-[100vmax] relative w-screen flex flex-col items-center justify-center bg-[#f7f6f9] dark:bg-[#15003f] overflow-hidden">
      {/* Live Camera */}
      <div className="w-[520px] h-[596px] absolute left-[199px] top-[232px] rounded-md border border-[#e6e6e6] inline-flex justify-start items-start overflow-hidden">
        <div className="flex-1 self-stretch relative bg-white dark:bg-[#1f0059]">
          <div className="absolute left-[160px] top-[276px] text-black dark:text-white text-4xl font-medium font-['Roboto'] leading-snug">
            Live Camera
          </div>
        </div>
      </div>

      {/* Total Waste */}
      <div className="w-[1100px] absolute left-[783px] top-[232px] inline-flex flex-col justify-center items-center gap-10">
        <div className="w-full inline-flex justify-start items-start gap-5">
          {["Total Waste", "Plastic", "Paper", "Metal", "Glass", "Other"].map(
            (label, idx) => (
              <div
                key={idx}
                className="flex-1 p-4 bg-white dark:bg-transparent rounded-md border border-black/10 dark:border-white inline-flex flex-col justify-start items-start gap-1 overflow-hidden"
              >
                <div className="w-full text-black/75 dark:text-[#e0e0e1] text-base font-normal font-['Roboto'] leading-normal">
                  {label}
                </div>
                <div className="relative text-black dark:text-white text-[28px] font-medium font-['Roboto'] leading-9">
                  {label === "Glass" ? 2 : label === "Other" ? 0 : 1}
                </div>
              </div>
            )
          )}
          <div className="flex-1 p-4 bg-white dark:bg-transparent rounded-md border border-black/10 dark:border-white inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
            <div className="w-full text-black/75 dark:text-[#e0e0e1] text-base font-normal font-['Roboto'] leading-normal">
              Total Waste
            </div>
            <div className="relative text-black dark:text-white text-[28px] font-medium font-['Roboto'] leading-9">
              5
            </div>
          </div>
        </div>
      </div>

      {/* Waste Composition */}
      <div className="w-[493px] h-[440px] absolute left-[783px] top-[388px] inline-flex flex-col justify-start items-start gap-1">
        <div className="w-full flex-1 p-5 bg-white dark:bg-transparent rounded-md border border-black/10 dark:border-[#d9d9d9] flex flex-col justify-start items-start gap-3">
          <div className="w-full text-black dark:text-white text-xl font-medium font-['Roboto'] leading-7">
            Waste Composition
          </div>
          <div className="w-full text-black/75 dark:text-[#e0e0e1] text-base font-normal font-['Roboto'] leading-normal">
            Percentage
          </div>
          <div className="w-full flex-1 relative">
            <div className="w-[280px] h-[280px] absolute left-[87px] top-[4px] bg-black/10 dark:bg-[#d9d9d9] rounded-full" />
            <div className="w-[280px] h-[280px] absolute left-[87px] top-[4px] bg-black/10 dark:bg-white rounded-full" />
            <div className="w-[280px] h-[280px] absolute left-[87px] top-[4px] bg-black/50 rounded-full" />
          </div>
          <div className="w-full text-right text-black/75 dark:text-[#e0e0e1] text-base font-normal font-['Roboto'] leading-normal">
            Types of Waste
          </div>
        </div>
      </div>

      {/* Recyclable & Non-Recyclable Section */}
      <div className="w-[520px] absolute left-[1333px] top-[388px] inline-flex flex-col justify-center items-center gap-10">
        <div className="w-full inline-flex justify-start items-center gap-10">
          {/* Recyclable Waste */}
          <div className="flex-1 py-3 inline-flex flex-col justify-center items-center gap-5">
            <div className="w-[100px] h-[100px] flex items-center justify-center bg-white dark:bg-[#1f0059] rounded-full border border-[#e6e6e6]">
              <GiRecycle className="text-4xl text-green-500 dark:text-white" />
            </div>
            <div className="w-full flex flex-col justify-start items-center gap-2">
              <div className="w-full text-center text-black dark:text-white text-xl font-normal font-['Roboto'] leading-7">
                Recyclable Waste
              </div>
            </div>
            <div className="w-full text-center text-black dark:text-white text-[28px] font-medium font-['Roboto'] leading-9">
              70%
            </div>
          </div>
          {/* Non-Recyclable Waste */}
          <div className="flex-1 py-3 inline-flex flex-col justify-center items-center gap-5">
            <div className="w-[100px] h-[100px] flex items-center justify-center bg-white dark:bg-[#1f0059] rounded-full border border-[#e6e6e6]">
              <FaTrash className="text-4xl text-red-500 dark:text-white" />
            </div>
            <div className="w-full flex flex-col justify-start items-center gap-2">
              <div className="w-full text-center text-black dark:text-white text-xl font-normal font-['Roboto'] leading-7">
                Non-Recyclable Waste
              </div>
            </div>
            <div className="w-full text-center text-black dark:text-white text-[28px] font-medium font-['Roboto'] leading-9">
              30%
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="w-[1920px] h-[58px] p-5 absolute left-0 top-0 bg-[#4caf50] dark:bg-[#0a0024] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)] inline-flex justify-center items-center gap-5 overflow-hidden">
        <div className="w-[22px] h-6 relative overflow-hidden">
          <div className="w-[15px] h-0 absolute left-[3px] top-[6px] ring-2 ring-white dark:ring-[#e0e0e0]" />
          <div className="w-[15px] h-0 absolute left-[3px] top-[12px] ring-2 ring-white dark:ring-[#e0e0e0]" />
          <div className="w-[15px] h-0 absolute left-[3px] top-[18px] ring-2 ring-white dark:ring-[#e0e0e0]" />
        </div>
        <div className="flex-1 relative text-white text-[28px] font-medium font-['Roboto'] leading-9">
          Sortify - Smart Bin
        </div>
      </div>

      {/* Toggle - Connection */}
      <div className="absolute left-[199px] top-[83px] inline-flex items-center gap-2">
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

      {/* Toggle - Dark / Light Mode */}
      <div className="absolute left-[1783px] top-[83px] inline-flex items-center gap-2">
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

      {/* Sidebar */}
      <div className="w-[159px] h-[1022px] py-3 absolute left-0 top-[58px] bg-white dark:bg-[#1f0059] inline-flex flex-col justify-start items-center overflow-hidden">
        <div className="w-full px-5 py-4 inline-flex justify-center items-center gap-3">
          <div className="w-5 h-5 relative bg-black/5 dark:bg-[#0a0024]/50 rounded-xl">
            <div className="absolute left-[-2px] top-[-2px] w-6 h-6 flex items-center justify-center text-center text-black dark:text-white text-[15px] font-bold font-['Roboto']">
              📷
            </div>
          </div>
          <div className="flex-1 text-[#212121] dark:text-[#e0e0e0] text-base font-medium font-['Roboto'] leading-tight">
            Camera 1
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
