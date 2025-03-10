import { useState, useEffect } from "react";
import Switch from "react-switch";
import { GiRecycle } from "react-icons/gi";
import { FaTrash } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

function App() {
  // State untuk toggle koneksi dan dark mode
  const [isConnected, setIsConnected] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efek dark mode: menambahkan/menghapus class 'dark' di <html>
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      {/*
        Layout untuk layar md ke atas
      */}
      <main
        className="
          hidden md:block
          w-screen md:w-[820px] lg:w-screen lg:min-h-screen
          min-h-[100vmax] relative lg:flex lg:flex-col lg:items-center lg:justify-center
          bg-[#f7f6f9] dark:bg-[#15003f]
          lg:overflow-hidden md:overflow-y-scroll
        "
      >
        {/* Live Camera */}
        <div
          className="
            rounded-md border dark:border-transparent border-[#e6e6e6] inline-flex justify-start items-start overflow-hidden
            lg:w-[520px] lg:h-[596px] lg:absolute lg:left-[199px] lg:top-[232px]
            md:w-[520px] md:h-[458px] md:absolute md:left-[219px] md:top-[149px]
          "
        >
          <div className="flex-1 self-stretch relative bg-white dark:bg-[#1f0059]">
            <div className="absolute left-[160px] lg:top-[276px] md:top-[218px] text-black dark:text-white text-4xl font-medium font-['Roboto'] leading-snug">
              Live Camera
            </div>
          </div>
        </div>

        {/* Total Waste */}
        <div
          className="
            inline-flex flex-col justify-center items-center gap-10
            lg:w-[1100px] lg:absolute lg:left-[783px] lg:top-[232px]
            md:w-[520px] md:absolute md:left-[219px] md:top-[650px]
          "
        >
          <div className="w-full lg:inline-flex lg:justify-start lg:items-start lg:gap-5 md:grid md:grid-cols-3 md:gap-5">
            {["Total Waste", "Plastic", "Paper", "Metal", "Glass", "Other"].map(
              (label, idx) => (
                <div
                  key={idx}
                  className="
                    flex-1 p-4 bg-white dark:bg-transparent rounded-md border
                    border-black dark:border-white inline-flex flex-col
                    justify-start items-start gap-1 overflow-hidden
                  "
                >
                  <div className="w-full text-black dark:text-[#e0e0e1] text-base font-normal font-['Roboto'] leading-normal">
                    {label}
                  </div>
                  <div className="relative text-black dark:text-white text-[28px] font-medium font-['Roboto'] leading-9">
                    {label === "Glass" ? 2 : label === "Other" ? 0 : 1}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Waste Composition */}
        <div
          className="
            hidden md:hidden lg:inline-flex
            lg:w-[493px] lg:h-[440px] lg:absolute lg:left-[783px] lg:top-[388px]
            flex-col justify-start items-start gap-1
          "
        >
          <div className="w-full flex-1 p-5 bg-white dark:bg-transparent rounded-md border border-black dark:border-[#d9d9d9] flex flex-col justify-start items-start gap-3">
            <div className="w-full text-black dark:text-white text-xl font-medium font-['Roboto'] leading-7">
              Waste Composition
            </div>
            <div className="w-full text-black dark:text-[#e0e0e1] text-base font-normal font-['Roboto'] leading-normal">
              Percentage
            </div>
            <div className="w-full flex-1 relative">
              <div className="w-[280px] h-[280px] absolute left-[87px] top-[4px] bg-black dark:bg-[#d9d9d9] rounded-full" />
              <div className="w-[280px] h-[280px] absolute left-[87px] top-[4px] bg-black dark:bg-white rounded-full" />
              <div className="w-[280px] h-[280px] absolute left-[87px] top-[4px] bg-black/50 rounded-full" />
            </div>
            <div className="w-full text-right text-black dark:text-[#e0e0e1] text-base font-normal font-['Roboto'] leading-normal">
              Types of Waste
            </div>
          </div>
        </div>

        {/* Recyclable & Non-Recyclable Section */}
        <div
          className="
            inline-flex flex-col justify-center items-center gap-10
            lg:w-[520px] lg:absolute lg:left-[1333px] lg:top-[388px]
            md:w-[520px] md:absolute md:left-[209px] md:top-[900px]
          "
        >
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
        <div
          className="
            p-5 absolute left-0 top-0 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)]
            inline-flex justify-center items-center gap-5 overflow-hidden
            lg:w-[1920px] lg:h-[58px] lg:bg-[#4caf50] dark:bg-[#0a0024]
            md:w-[820px] md:h-[58px] md:bg-[#4caf50]
          "
        >
          <div
            className="
              relative overflow-hidden
              lg:w-[22px] lg:h-6
              md:w-[22px] md:h-6
            "
          >
            <div
              className="
                absolute left-[3px]
                lg:top-[6px] md:top-[6px]
                lg:w-[15px] lg:h-0 lg:ring-2 lg:ring-white
                md:w-[15px] md:h-0 md:ring-2 md:ring-white
              "
            />
            <div
              className="
                absolute left-[3px]
                lg:top-[12px] md:top-[12px]
                lg:w-[15px] lg:h-0 lg:ring-2 lg:ring-white
                md:w-[15px] md:h-0 md:ring-2 md:ring-white
              "
            />
            <div
              className="
                absolute left-[3px]
                lg:top-[18px] md:top-[18px]
                lg:w-[15px] lg:h-0 lg:ring-2 lg:ring-white
                md:w-[15px] md:h-0 md:ring-2 md:ring-white
              "
            />
          </div>
          <div className="flex-1 relative text-white text-[28px] font-medium font-['Roboto'] leading-9">
            Sortify - Smart Bin
          </div>
        </div>

        {/* Toggle - Connection */}
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

        {/* Toggle - Dark / Light Mode */}
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

        {/* Tambahan Icon untuk md */}
        <div className="md:absolute md:left-[698px] md:top-[78px] md:inline-block lg:hidden">
          {isDarkMode ? (
            <MdOutlineDarkMode className="w-[35px] h-[35px]" />
          ) : (
            <MdOutlineLightMode className="w-[35px] h-[35px]" />
          )}
        </div>

        {/* Sidebar */}
        <div
          className="
            py-3 absolute left-0 top-[58px] inline-flex flex-col justify-start items-center overflow-hidden
            lg:w-[159px] lg:h-[1022px] lg:bg-white dark:bg-[#1f0059]
            md:w-[159px] md:h-[1122px] md:bg-white
          "
        >
          <div className="w-full px-5 py-4 inline-flex justify-center items-center gap-3">
            <div
              className="
                relative rounded-xl
                lg:w-5 lg:h-5 lg:bg-black/5 lg:dark:bg-[#0a0024]/50
                md:w-5 md:h-5 md:bg-black/5
              "
            >
              <div className="absolute left-[-2px] top-[-2px] w-6 h-6 flex items-center justify-center text-center text-black dark:text-white text-[15px] font-bold font-['Roboto']">
                📷
              </div>
            </div>
            <div
              className="
                flex-1 text-base font-medium font-['Roboto'] leading-tight
                lg:text-[#212121] dark:text-[#e0e0e0]
                md:text-[#212121]
              "
            >
              Camera 1
            </div>
          </div>
        </div>
      </main>

      {/*
        Layout Mobile (di bawah md)
      */}
      <div className="md:hidden w-[360px] h-[922px] pb-3 dark:bg-[#15003f] bg-[#f7f6f9] inline-flex flex-col justify-center items-start gap-3">
        <div className="self-stretch dark:bg-[#0a0024] bg-[#4caf50] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)] flex flex-col justify-start items-start">
          <div className="self-stretch pl-4 pr-2 py-3 inline-flex justify-start items-center gap-2">
            <div className="w-[22px] h-6 relative overflow-hidden">
              <div className="w-[15px] h-0 left-[3px] top-[6px] absolute ring-2 ring-white" />
              <div className="w-[15px] h-0 left-[3px] top-[12px] absolute ring-2 ring-white" />
              <div className="w-[15px] h-0 left-[3px] top-[18px] absolute ring-2 ring-white" />
            </div>
            <div className="flex-1 relative justify-start text-white text-xl font-bold font-['Roboto'] leading-normal">
              Sortify - Smart Bin
            </div>
          </div>
        </div>
        <div className="w-[348px] h-[34px] relative">
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
            <span className="text-sm font-medium font-['Inter'] text-black dark:text-white">
              {isConnected ? "Connected" : "Disconnected"}
            </span>
          </div>
          <div
            data-state="On"
            className="w-12 h-[26px] left-[258px] top-[-0.82px] absolute inline-flex justify-start items-center"
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
        <div className="self-stretch h-[296px] px-3 inline-flex justify-start items-start overflow-hidden">
          <div className="flex-1 self-stretch relative dark:bg-[#1f0059] bg-white rounded-md border border-[#e6e6e6] dark:border-transparent">
            <div className="w-[304px] h-4 left-[16px] top-[140px] absolute text-center justify-center dark:text-white text-black text-base font-normal font-['Roboto'] leading-snug">
              Live Camera
            </div>
          </div>
        </div>
        <div className="self-stretch px-3 flex flex-col justify-center items-center gap-2 overflow-hidden">
          <div className="self-stretch pt-4 inline-flex justify-start items-center gap-3">
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch relative justify-start dark:text-white text-black text-lg font-medium font-['Roboto'] leading-normal">
                Waste Overview
              </div>
              <div className="self-stretch relative justify-start dark:text-[#e0e0e1] text-black text-xs font-normal font-['Roboto'] leading-none">
                Total Waste in Bin
              </div>
            </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-start gap-2">
            <div className="flex-1 p-3 bg-white dark:bg-transparent rounded-md border dark:border-white border-black inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
              <div className="self-stretch relative justify-start dark:text-[#e0e0e1] text-black text-sm font-normal font-['Roboto'] leading-tight">
                Total Waste
              </div>
              <div className="relative justify-start dark:text-white text-black text-xl font-bold font-['Roboto'] leading-7">
                5
              </div>
            </div>
            <div className="flex-1 p-3 dark:bg-transparent bg-white rounded-md border dark:border-white border-black inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
              <div className="self-stretch relative justify-start dark:text-[#e0e0e1] text-black text-sm font-normal font-['Roboto'] leading-tight">
                Plastic
              </div>
              <div className="relative justify-start dark:text-white text-black text-xl font-bold font-['Roboto'] leading-7">
                1
              </div>
            </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-start gap-2">
            <div className="flex-1 p-3 dark:bg-transparent bg-white rounded-md border dark:border-white border-black inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
              <div className="self-stretch relative justify-start dark:text-[#e0e0e1] text-black text-sm font-normal font-['Roboto'] leading-tight">
                Paper
              </div>
              <div className="relative justify-start dark:text-white text-black text-xl font-bold font-['Roboto'] leading-7">
                1
              </div>
            </div>
            <div className="flex-1 p-3 dark:bg-transparent bg-white rounded-md border dark:border-white border-black inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
              <div className="self-stretch relative justify-start dark:text-[#e0e0e1] text-black text-sm font-normal font-['Roboto'] leading-tight">
                Metal
              </div>
              <div className="relative justify-start dark:text-white text-black text-xl font-bold font-['Roboto'] leading-7">
                1
              </div>
            </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-start gap-2">
            <div className="flex-1 p-3 dark:bg-transparent bg-white rounded-md border dark:border-white border-black inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
              <div className="self-stretch relative justify-start dark:text-[#e0e0e1] text-black text-sm font-normal font-['Roboto'] leading-tight">
                Glass
              </div>
              <div className="relative justify-start dark:text-white text-black text-xl font-bold font-['Roboto'] leading-7">
                2
              </div>
            </div>
            <div className="flex-1 p-3 dark:bg-transparent bg-white rounded-md border dark:border-white border-black inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
              <div className="self-stretch relative justify-start dark:text-[#e0e0e1] text-black text-sm font-normal font-['Roboto'] leading-tight">
                Other
              </div>
              <div className="relative justify-start dark:text-white text-black text-xl font-bold font-['Roboto'] leading-7">
                0
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-3 flex flex-col justify-center items-center">
          <div className="self-stretch pt-4 inline-flex justify-start items-center gap-3">
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch relative justify-start dark:text-white text-black text-lg font-medium font-['Roboto'] leading-normal">
                Waste Breakdown
              </div>
            </div>
          </div>
          <div className="self-stretch py-3 relative inline-flex justify-center items-center gap-2">
            <div className="w-8 h-8 relative bg-white rounded-2xl border-[0.50px] border-[#e6e6e6]">
              <div className="w-8 h-8 left-0 top-0 absolute text-center justify-center text-black text-xl font-normal font-['Roboto'] leading-loose">
                🔄
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch relative justify-start dark:text-white text-black text-sm font-normal font-['Roboto'] leading-tight">
                Recyclable Waste
              </div>
            </div>
            <div className="relative text-right justify-start dark:text-white text-black text-sm font-medium font-['Roboto'] leading-tight">
              70%
            </div>
            <div className="w-[336px] h-0 left-0 top-[56px] absolute ring-1 dark:ring-white ring-black" />
          </div>
          <div className="self-stretch py-3 relative inline-flex justify-center items-center gap-2">
            <div className="w-8 h-8 relative bg-white rounded-2xl border-[0.50px] border-[#e6e6e6]">
              <div className="w-8 h-8 left-0 top-0 absolute text-center justify-center text-black text-xl font-bold font-['Roboto'] leading-loose">
                ⚠️
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start">
              <div className="self-stretch relative justify-start dark:text-white text-black text-sm font-normal font-['Roboto'] leading-tight">
                Non-Recyclable Waste
              </div>
            </div>
            <div className="relative text-right justify-start dark:text-white text-black text-sm font-medium font-['Roboto'] leading-tight">
              30%
            </div>
            <div className="w-[336px] h-0 left-0 top-[56px] absolute ring-1 dark:ring-white ring-black" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
