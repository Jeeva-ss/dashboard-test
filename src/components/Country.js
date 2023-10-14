import React from 'react'
import Card from './Card'
import DatamapsIndia from "react-datamaps-india";
import states from './state.js';

export default function Country() {

  let regionData = {};
  states.forEach((state) => {
    regionData[state.state_name] = { state_id: state.state_id };
  });

  return (
    <div className='flex-grow'>
      <Card>
        <div className="flex justify-between">
          <p className='text-xl text-indigo-blue font-bold'>Customer visit on site</p>
          <div className='flex justify-between items-center gap-2'>
            <p className='text-gunmetal-black text-xs font-medium'>Year</p>
            <p className='text-gunmetal-black text-xs font-medium'>Month</p>
            <p className='text-gunmetal-black text-xs font-medium'>Week</p>
            <p className='text-gunmetal-black text-xs font-medium'>Day</p>
          </div>
        </div>
        <div className='relative w-[300px] mx-auto'>
          <div className='text-center'>
            <DatamapsIndia
              regionData={{
                Maharashtra: {
                  score: 20
                }
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
                width: 10
              }}
            />
          </div>
        </div>
      </Card>
    </div>
  )
}
