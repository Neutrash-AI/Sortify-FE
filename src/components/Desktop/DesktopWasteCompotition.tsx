import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useGlobalState } from "../../context/useGlobalState";

const data = [
  { name: "Organic", value: 0 },
  { name: "Recycle", value: 0 },
];

const COLORS = ["#4caf50", "#2196f3"];

const DesktopWasteComposition = () => {
  const { displaySidebar } = useGlobalState();
  return (
    <div
      className={`${
        displaySidebar
          ? "translate-x-0"
          : "md:-translate-x-[9vw] lg:-translate-x-[5vw]"
      } hidden md:hidden lg:inline-flex
        lg:w-[25.9vw] lg:h-[23.1vw] lg:absolute lg:left-[41.1vw] lg:top-[20.4vw]
        flex-col justify-start items-start gap-[0.21vw]
        transform transition-transform duration-500 ease-in-out`}
    >
      <div className="w-full flex-1 p-[1.05vw] bg-white dark:bg-transparent rounded-md border border-black dark:border-[#d9d9d9] flex flex-col justify-start items-start gap-[0.63vw]">
        <div className="w-full text-black dark:text-white text-[1.2vw] font-medium font-['Roboto'] leading-[1.47vw]">
          Waste Composition
        </div>
        <div className="w-full text-black dark:text-[#e0e0e1] text-[0.85vw] font-normal font-['Roboto'] leading-normal">
          Percentage
        </div>
        <div className="w-full h-[14.7vw] flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius="40%"
                outerRadius="70%"
                fill="#8884d8"
                paddingAngle={3}
                dataKey="value"
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full text-right text-black dark:text-[#e0e0e1] text-[0.85vw] font-normal font-['Roboto'] leading-normal">
          Types of Waste
        </div>
      </div>
    </div>
  );
};

export default DesktopWasteComposition;
