import Card from "./Card";
import DropDown from "../assets/Drop Down.svg";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: "# of Earnings",
      data: [40, 15, 15, 30],
      backgroundColor: ["#F3B74C", "#E96559", "#46CA83", "#7690E5"],
      borderWidth: 1,
    },
  ],
};

export default function Earning() {
  return (
    <div className="flex-auto ">
      <Card>
        <div className="flex justify-between mb-2">
          <p className="text-xs font-bold md:text-xl text-indigo-blue">
            Total Earnings
          </p>
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-medium text-gunmetal-black">Day</p>
            <img src={DropDown} alt="arrowdown" />
          </div>
        </div>
        <div className="flex items-center justify-evenly">
          <div className="w-[150px] md:w-[200px]">
            <Doughnut data={data} />
          </div>
          <div>
            <div className="flex items-center gap-1 my-3">
              <div className="outer-r outer-profit-r">
                <div className="inner-r profit-r"></div>
              </div>
              <p className="text-sm font-semibold text-indigo-blue">Profits</p>
            </div>

            <div className="flex items-center gap-1 my-3">
              <div className="outer-r outer-margin-r">
                <div className="inner-r margin-r"></div>
              </div>
              <p className="text-sm font-semibold text-indigo-blue">Margins</p>
            </div>

            <div className="flex items-center gap-1 my-3">
              <div className="outer-r outer-lost-r">
                <div className="inner-r lost-r"></div>
              </div>
              <p className="text-sm font-semibold text-indigo-blue">Lost</p>
            </div>

            <div className="flex items-center gap-1 my-3">
              <div className="outer-r outer-other-r">
                <div className="inner-r other-r"></div>
              </div>
              <p className="text-sm font-semibold text-indigo-blue">Others</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
