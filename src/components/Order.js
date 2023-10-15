import React from "react";
import Card2 from "./Card2";

export default function Order() {
  const data = [
    {
      order: "#243654",
      name: "Quiche Hollandaise",
      address: "4693 White Oak Drive Kansas City, MO",
      date: "20 Nov 2021",
      type: "Paytm",
      pstatus: "Paid",
      dstatus: "Done",
    },
    {
      order: "#243654",
      name: "Quiche Hollandaise",
      address: "4693 White Oak Drive Kansas City, MO",
      date: "20 Nov 2021",
      type: "Paytm",
      pstatus: "Paid",
      dstatus: "Done",
    },
    {
      order: "#243654",
      name: "Quiche Hollandaise",
      address: "4693 White Oak Drive Kansas City, MO",
      date: "20 Nov 2021",
      type: "Paytm",
      pstatus: "Paid",
      dstatus: "Done",
    },
  ];

  return (
    <div>
      <Card2>
        <div className="flex justify-between">
          <p className="text-xs font-bold md:text-xl text-indigo-blue">
            Customer Order Details
          </p>
          <div className="flex items-center justify-between gap-1 md:gap-2">
            <p className="text-xs font-medium text-gunmetal-black">Year</p>
            <p className="text-xs font-medium text-gunmetal-black">Month</p>
            <p className="text-xs font-medium text-gunmetal-black">Week</p>
            <p className="text-xs font-medium text-gunmetal-black">Day</p>
          </div>
        </div>

        {/* Grid */}

        <div className="my-2">
          {data.map((x, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-between gap-2 p-2 my-2 rounded shadow-sm md:flex-row md:items-center"
            >
              <p className="text-xs font-bold text-indigo-blue">{x.order}</p>
              <p className="text-xs font-bold text-indigo-blue">{x.name}</p>
              <p className="text-xs font-bold text-indigo-blue">{x.address}</p>
              <p className="text-xs font-bold text-gray-300">{x.date}</p>
              <p className="text-xs font-bold text-indigo-blue">{x.type}</p>
              <div className="flex items-center gap-1">
                {x.pstatus ? (
                  <button className={x.pstatus === "Paid" ? "paid" : "fail"}>
                    <p>{x.pstatus}</p>
                  </button>
                ) : (
                  ""
                )}
                {x.dstatus ? (
                  <button className={x.dstatus === "Done" ? "paid" : "failed"}>
                    <p>{x.dstatus}</p>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col items-center justify-between gap-1 mb-14 md:mb-4 md:flex-row">
          <div>
            <p className="text-sm text-light-gray">
              Showing 1 to 10 of 100 entries
            </p>
          </div>
          <div className="flex items-center justify-between gap-1">
            <p className="text-sm text-gunmetal-black">Prev</p>
            <div className="flex items-center justify-center page-m">
              <p className="text-white">1</p>
            </div>
            <div className="flex items-center justify-center page-r">
              <p className="text-gray-300">2</p>
            </div>
            <div className="flex items-center justify-center page-r">
              <p className="text-gray-300">3</p>
            </div>
            <div className="flex items-center justify-center page-r">
              <p className="text-gray-300">4</p>
            </div>
            <div className="flex items-center justify-center page-r">
              <p className="text-gray-300">5</p>
            </div>
            <div className="flex items-center justify-center page-r">
              <p className="text-gray-300">6</p>
            </div>

            <p className="text-sm text-gunmetal-black">Next</p>
          </div>
        </div>
      </Card2>
    </div>
  );
}