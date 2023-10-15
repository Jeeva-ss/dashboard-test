import React from "react";
import Card from "./Card";
import DatamapsIndia from "react-datamaps-india";
import states from "./state.js";

export default function Country() {
  let regionData = {};
  states.forEach((state) => {
    regionData[state.state_name] = { state_id: state.state_id };
  });

  return (
    <div className="grow-[3]">
      <Card>
        <div className="flex justify-between">
          <p className="text-xs font-bold md:text-xl text-indigo-blue">
            Customer visit on site
          </p>
          <div className="flex items-center justify-between gap-1 md:gap-2">
            <p className="text-xs font-medium text-gunmetal-black">Year</p>
            <p className="text-xs font-medium text-gunmetal-black">Month</p>
            <p className="text-xs font-medium text-gunmetal-black">Week</p>
            <p className="text-xs font-medium text-gunmetal-black">Day</p>
          </div>
        </div>
        <div className="relative w-[250px] md:w-[300px] mx-auto">
          <div className="text-center">
            <DatamapsIndia
              regionData={{
                Maharashtra: {
                  score: 20,
                },
              }}
              hoverComponent={({ value }) => {
                return (
                  <>
                    <p>State:{value.name}</p>
                    {value.score ? <p>{value.score}</p> : ""}
                  </>
                );
              }}
              mapLayout={{
                startColor: "red",
                endColor: "#FF6347",
                hoverTitle: "Count",
                borderColor: "#8D8D8D",
                hoverBorderColor: "#8D8D8D",
                hoverColor: "coral",
                height: 10,
                width: 10,
              }}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
