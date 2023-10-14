import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Card from './Card';

import DropDown from '../assets/Drop Down.svg'

export default function Target() {

  const percentage = 67;
  return (
    <div className='grow'>
      <Card>
        <div >
          <div className='flex justify-between'>
            <p className='text-xl text-indigo-blue font-bold'>Total Target Achievded</p>
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
    </div>
  )
}
