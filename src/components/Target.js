import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Card from "./Card";

import DropDown from "../assets/Drop Down.svg";

export default function Target() {
  const percentage = 67;
  return (
    <div className="flex-auto ">
      <Card>
        <div>
          <div className="flex justify-between mb-2">
            <p className="text-xs font-bold md:text-xl text-indigo-blue">
              Total Target Achievded
            </p>
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-medium text-gunmetal-black">Day</p>
              <img src={DropDown} alt="arrowdown" />
            </div>
          </div>
          <div className="flex flex-col items-center mt-4 md:mt-0 justify-evenly custom-center">
            <div className="w-[100px]">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  textColor: "#1D396B",
                  pathColor: "#1ABCB0",
                  trailColor: "#E5EDF0",
                })}
              />
            </div>
            <div className="flex justify-between gap-5 my-5">
              <div>
                <label>
                  <input type="radio" name="radio" />
                  <span className="text-sm font-medium text-indigo-blue">
                    Completed
                  </span>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="radio" />
                  <span className="text-sm font-medium text-indigo-blue">
                    Incomplete
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}