import React from "react";
import Card2 from "./Card2";

import Customer from "../assets/Total Customer.svg";
import Orders from "../assets/Total Orders.svg";
import Pending from "../assets/Total Pending.svg";
import Delivered from "../assets/Total Delivered.svg";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: { y: { display: false }, x: { display: false } },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data1 = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "#F7B422",
      backgroundColor: "#F7B422",
    },
  ],
};

export const data2 = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "#A682EF",
      backgroundColor: "#A682EF",
    },
  ],
};

export const data3 = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "#1ABCB0",
      backgroundColor: "#1ABCB0",
    },
  ],
};

export const data4 = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "#EB61A5",
      backgroundColor: "#EB61A5",
    },
  ],
};

export default function Overview() {
  return (
    <div className="flex flex-wrap">
      <div className="w-6/12 md:w-6/12 lg:w-6/12 xl:w-3/12 ">
        <Card2>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center justify-between gap-1">
              <img src={Customer} alt="pic" width={15} />
              <p className="text-xs font-bold text-indigo-blue">
                Customer visit
              </p>
            </div>
            <p className="text-xs font-medium text-gunmetal-black">721,345</p>
          </div>
          <Line options={options} data={data1} />
        </Card2>
      </div>
      <div className="w-6/12 md:w-6/12 lg:w-6/12 xl:w-3/12 ">
        <Card2>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center justify-between gap-1">
              <img src={Orders} alt="pic" width={15} />
              <p className="text-xs font-bold text-indigo-blue">Orders</p>
            </div>
            <p className="text-xs font-medium text-gunmetal-black">23,482</p>
          </div>
          <Line options={options} data={data2} />
        </Card2>
      </div>
      <div className="w-6/12 md:w-6/12 lg:w-6/12 xl:w-3/12 ">
        <Card2>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center justify-between gap-1">
              <img src={Pending} alt="pic" width={10} />
              <p className="text-xs font-bold text-indigo-blue">
                Pending
              </p>
            </div>
            <p className="text-xs font-medium text-gunmetal-black">4,440</p>
          </div>
          <Line options={options} data={data3} />
        </Card2>
      </div>
      <div className="w-6/12 md:w-6/12 lg:w-6/12 xl:w-3/12 ">
        <Card2>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center justify-between gap-1">
              <img src={Delivered} alt="pic" width={15} />
              <p className="text-xs font-bold text-indigo-blue">
                Delivered
              </p>
            </div>
            <p className="text-xs font-medium text-gunmetal-black">19,442</p>
          </div>
          <Line options={options} data={data4} />
        </Card2>
      </div>
    </div>
  );
}