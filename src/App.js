import './App.css';
import Card from './components/Card';
import Income from './components/Income';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import DropDown from './assets/Drop Down.svg'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function App() {
  const percentage = 67;
  return (
    <div className="App">
      {/* <Navbar />
      <Income />
      <Sidebar /> */}
      <Card>
        <div >
          <div className='flex justify-between'>
            <p className='text-xl text-indigo-blue font-bold'>Total target achievded</p>
            <div className='flex justify-between items-center gap-2'>
              <p className='text-gunmetal-black text-xs font-medium'>Day</p>
              <img src={DropDown} alt="arrowdown" />
            </div>
          </div>
          <div className='flex flex-col justify-evenly items-center custom-center'>
            <div className='w-[100px]'>
              <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                textColor: "#1D396B",
                pathColor: "#1ABCB0",
                trailColor: "#E5EDF0",
              })} />
            </div>
            <div className='flex justify-between gap-5 my-5'>
              <div>
                <label>
                  <input type="radio" name='radio' />
                  <span className='text-indigo-blue text-sm font-medium' >Completed</span>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name='radio' />
                  <span className='text-indigo-blue text-sm font-medium'>Incomplete</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card >
        <div className="flex justify-between">
          <p className='text-xl text-indigo-blue font-bold'>Total Earnings</p>
          <div className='flex justify-between items-center gap-2'>
            <p className='text-gunmetal-black text-xs font-medium'>Day</p>
            <img src={DropDown} alt="arrowdown" />
          </div>
        </div>
      </Card>
      <Card>
        <div className="flex justify-between">
          <p className='text-xl text-indigo-blue font-bold'>Total Profit & Lost</p>
          <div className='flex justify-between items-center gap-2'>
            <p className='text-gunmetal-black text-xs font-medium'>Day</p>
            <img src={DropDown} alt="arrowdown" />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;
