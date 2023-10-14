
import Card from './Card'
import DropDown from '../assets/Drop Down.svg'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
  scales: { y: { display: false }, }
};

const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const data = {
  labels,
  datasets: [
    {
      label: '$ 187.39',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#E96559',
      borderRadius: 99,
    },
    {
      label: '$ 256.48',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#46CA83',
      borderRadius: 99,
    },
  ],
};


export default function ProfitLost() {
  return (
    <div className='flex-auto w-72'>
      <Card>
        <div className="flex justify-between">
          <p className='text-xl text-indigo-blue font-bold'>Total Profit & Lost</p>
          <div className='flex justify-between items-center gap-2'>
            <p className='text-gunmetal-black text-xs font-medium'>Day</p>
            <img src={DropDown} alt="arrowdown" />
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div>
            <Bar options={options} data={data} />
          </div>
        </div>
      </Card>

    </div>
  )
}
