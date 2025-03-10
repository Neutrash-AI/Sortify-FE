function App() {
  return (
    <main className="lg:min-h-screen min-h-[100vmax] relative w-screen flex flex-col items-center justify-center  bg-[#f7f6f9] overflow-hidden">
      {/* Live Camera */}
      <div className="w-[520px] h-[596px] left-[199px] top-[232px] absolute rounded-md border border-[#e6e6e6] inline-flex justify-start items-start overflow-hidden">
        <div className="flex-1 self-stretch relative bg-white">
          <div className="left-[160px] top-[276px] absolute justify-start text-black text-4xl font-medium font-['Roboto'] leading-snug">
            Live Camera{" "}
          </div>
        </div>
      </div>
      {/* Total Waste */}
      <div className="w-[1100px] left-[783px] top-[232px] absolute inline-flex flex-col justify-center items-center gap-10">
        <div className="self-stretch inline-flex justify-start items-start gap-5">
          <div className="flex-1 p-4 bg-white rounded-md border border-black/10 inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
            <div className="self-stretch relative justify-start text-black/75 text-base font-normal font-['Roboto'] leading-normal">
              Total Waste
            </div>
            <div className="relative justify-start text-black text-[28px] font-medium font-['Roboto'] leading-9">
              5
            </div>
          </div>
          <div className="flex-1 p-4 bg-white rounded-md border border-black/10 inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
            <div className="self-stretch relative justify-start text-black/75 text-base font-normal font-['Roboto'] leading-normal">
              Plastic
            </div>
            <div className="w-[108px] relative justify-start text-black text-[28px] font-medium font-['Roboto'] leading-9">
              1
            </div>
          </div>
          <div className="flex-1 p-4 bg-white rounded-md border border-black/10 inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
            <div className="self-stretch relative justify-start text-black/75 text-base font-normal font-['Roboto'] leading-normal">
              Paper
            </div>
            <div className="relative justify-start text-black text-[28px] font-medium font-['Roboto'] leading-9">
              1
            </div>
          </div>
          <div className="flex-1 p-4 bg-white rounded-md border border-black/10 inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
            <div className="self-stretch relative justify-start text-black/75 text-base font-normal font-['Roboto'] leading-normal">
              Metal
            </div>
            <div className="relative justify-start text-black text-[28px] font-medium font-['Roboto'] leading-9">
              1
            </div>
          </div>
          <div className="flex-1 p-4 bg-white rounded-md border border-black/10 inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
            <div className="self-stretch relative justify-start text-black/75 text-base font-normal font-['Roboto'] leading-normal">
              Glass
            </div>
            <div className="relative justify-start text-black text-[28px] font-medium font-['Roboto'] leading-9">
              2
            </div>
          </div>
          <div className="flex-1 p-4 bg-white rounded-md border border-black/10 inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
            <div className="self-stretch relative justify-start text-black/75 text-base font-normal font-['Roboto'] leading-normal">
              Other
            </div>
            <div className="relative justify-start text-black text-[28px] font-medium font-['Roboto'] leading-9">
              0
            </div>
          </div>
        </div>
      </div>
      {/* Waste Composition */}
      <div className="w-[493px] h-[440px] left-[783px] top-[388px] absolute inline-flex flex-col justify-start items-start gap-1">
        <div className="self-stretch flex-1 p-5 bg-white rounded-md border border-black/10 flex flex-col justify-start items-start gap-3">
          <div className="self-stretch relative justify-start text-black text-xl font-medium font-['Roboto'] leading-7">
            Waste Composition
          </div>
          <div className="self-stretch relative justify-start text-black/75 text-base font-normal font-['Roboto'] leading-normal">
            Percentage
          </div>
          <div className="self-stretch flex-1 relative">
            <div className="w-[280px] h-[280px] left-[87px] top-[4px] absolute bg-black/10 rounded-full" />
            <div className="w-[280px] h-[280px] left-[87px] top-[4px] absolute bg-black/10 rounded-full" />
            <div className="w-[280px] h-[280px] left-[87px] top-[4px] absolute bg-black/50 rounded-full" />
          </div>
          <div className="self-stretch relative text-right justify-start text-black/75 text-base font-normal font-['Roboto'] leading-normal">
            Types of Waste
          </div>
        </div>
      </div>
      {/* Recycle & NonRecycle Section */}
      <div className="w-[520px] left-[1333px] top-[388px] absolute inline-flex flex-col justify-center items-center gap-10">
        <div className="self-stretch inline-flex justify-start items-start gap-10">
          <div className="flex-1 py-3 inline-flex flex-col justify-center items-center gap-5">
            {/* Change into react icons */}
            <div className="w-[100px] h-[100px] relative bg-white rounded-[50px] border border-[#e6e6e6]">
              <div className="w-[65px] h-[65px] left-[17px] top-[17px] absolute">
                <div className="w-[63.18px] h-[62.90px] left-[0.91px] top-[2.03px] absolute bg-black border-black" />
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch relative text-center justify-start text-black text-xl font-normal font-['Roboto'] leading-7">
                Recyclable Waste
              </div>
            </div>
            <div className="self-stretch relative text-center justify-start text-black text-[28px] font-medium font-['Roboto'] leading-9">
              70%
            </div>
          </div>
          <div className="flex-1 py-3 inline-flex flex-col justify-center items-center gap-5">
            {/* Change into react icons */}
            <div className="w-[100px] h-[100px] relative bg-white rounded-[50px] border border-[#e6e6e6]">
              <div className="w-[65px] h-[65px] left-[17px] top-[17px] absolute">
                <div className="w-[8.13px] h-[34.53px] left-[28.43px] top-[8.12px] absolute bg-black" />
                <div className="w-[8.12px] h-[8.12px] left-[28.44px] top-[48.75px] absolute bg-black" />
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch relative text-center justify-start text-black text-xl font-normal font-['Roboto'] leading-7">
                Non-Recyclable Waste
              </div>
            </div>
            <div className="self-stretch relative text-center justify-start text-black text-[28px] font-medium font-['Roboto'] leading-9">
              30%
            </div>
          </div>
        </div>
      </div>
      {/* Navbar */}
      <div className="w-[1920px] h-[58px] p-5 left-0 top-0 absolute bg-[#4caf50] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)] inline-flex justify-center items-center gap-5 overflow-hidden">
        <div className="w-[22px] h-6 relative overflow-hidden">
          <div className="w-[15px] h-0 left-[3px] top-[6px] absolute ring-2 ring-white" />
          <div className="w-[15px] h-0 left-[3px] top-[12px] absolute ring-2 ring-white" />
          <div className="w-[15px] h-0 left-[3px] top-[18px] absolute ring-2 ring-white" />
        </div>
        <div className="flex-1 relative justify-start text-white text-[28px] font-medium font-['Roboto'] leading-9">
          Sortify - Smart Bin
        </div>
      </div>
      {/* Toggle bar */}
      <div
        data-state="On"
        className="w-[157px] h-[26px] left-[199px] top-[83px] absolute inline-flex justify-start items-center"
      >
        <div className="w-11 h-6 relative bg-[#4caf50] rounded-full overflow-hidden">
          <div className="w-5 h-5 left-[22px] top-[2px] absolute bg-white rounded-full" />
        </div>
        <div className="pl-2 inline-flex flex-col justify-start items-start gap-2.5">
          <div className="inline-flex justify-center items-center gap-2.5">
            <div className="relative justify-start text-black text-sm font-medium font-['Inter']">
              Connected
            </div>
          </div>
        </div>
      </div>
      {/* Toggle bar */}
      <div
        data-state="On"
        className="w-12 h-[26px] left-[1783px] top-[83px] absolute inline-flex justify-start items-center"
      >
        <div className="w-11 h-6 relative bg-[#4caf50] rounded-full overflow-hidden">
          <div className="w-5 h-5 left-[22px] top-[2px] absolute bg-white rounded-full" />
        </div>
      </div>
      {/* Icon Dark / Light mode */}
      <div className="w-[35px] h-[35px] left-[1848px] top-[78px] absolute">
        <div className="w-[35px] h-[35px] left-0 top-0 absolute bg-black border-black" />
      </div>
      {/* Sidebar */}
      <div className="w-[159px] h-[1022px] py-3 left-0 top-[58px] absolute bg-white inline-flex flex-col justify-start items-center overflow-hidden">
        <div className="self-stretch px-5 py-4 inline-flex justify-center items-center gap-3">
          <div className="w-5 h-5 relative bg-black/5 rounded-xl">
            <div className="w-6 h-6 left-[-2px] top-[-2px] absolute text-center justify-center text-black text-[15px] font-bold font-['Roboto'] leading-normal">
              📷
            </div>
          </div>
          <div className="flex-1 relative justify-start text-[#212121] text-base font-medium font-['Roboto'] leading-tight">
            Camera 1
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
