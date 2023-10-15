import React from 'react'
import Card2 from './Card2'

export default function Order() {
  return (
    <div>
      <Card2>
        <div className="flex justify-between">
          <p className='text-xs md:text-xl text-indigo-blue font-bold'>Customer Order Details</p>
          <div className='flex justify-between items-center gap-1 md:gap-2'>
            <p className='text-gunmetal-black text-xs font-medium'>Year</p>
            <p className='text-gunmetal-black text-xs font-medium'>Month</p>
            <p className='text-gunmetal-black text-xs font-medium'>Week</p>
            <p className='text-gunmetal-black text-xs font-medium'>Day</p>
          </div>
        </div>

        {/* Pagination */}
        <div className='md:flex-row justify-between items-center flex flex-col gap-1'>
          <div>
            <p className='text-light-gray text-sm'>Showing 1 to 10 of 100 entries</p>
          </div>
          <div className='flex justify-between items-center gap-1'>
            <p className='text-gunmetal-black text-sm'>Prev</p>
            <div className='page-m flex items-center justify-center'>
              <p className='text-white'>1</p>
            </div>
            <div className='page-r flex items-center justify-center'>
              <p className='text-gray-300'>2</p>
            </div>
            <div className='page-r flex items-center justify-center'>
              <p className='text-gray-300'>3</p>
            </div>
            <div className='page-r flex items-center justify-center'>
              <p className='text-gray-300'>4</p>
            </div>
            <div className='page-r flex items-center justify-center'>
              <p className='text-gray-300'>5</p>
            </div>
            <div className='page-r flex items-center justify-center'>
              <p className='text-gray-300'>6</p>
            </div>

            <p className='text-gunmetal-black text-sm'>Next</p>
          </div>
        </div>
      </Card2>
    </div>
  )
}
