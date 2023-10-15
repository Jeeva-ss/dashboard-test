import React from 'react'
import Card2 from './Card2'

export default function Order() {

  const data = [{
    order: '#243654',
    name: 'Quiche Hollandaise',
    address: '4693 White Oak Drive Kansas City, MO',
    date: '20 Nov 2021',
    type: 'Paytm',
    pstatus: 'Paid',
    dstatus: 'Done'
  },
  {
    order: '#243654',
    name: 'Quiche Hollandaise',
    address: '4693 White Oak Drive Kansas City, MO',
    date: '20 Nov 2021',
    type: 'Paytm',
    pstatus: 'Paid',
    dstatus: 'Done'
  },
  {
    order: '#243654',
    name: 'Quiche Hollandaise',
    address: '4693 White Oak Drive Kansas City, MO',
    date: '20 Nov 2021',
    type: 'Paytm',
    pstatus: 'Paid',
    dstatus: 'Done',
  },
  ]

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


        {/* Grid */}

        <div className='my-2'>

          {data.map((x, index) => (
            <div key={index} className='flex flex-col md:flex-row items-start shadow-sm md:items-center justify-between my-2 rounded p-2 gap-2'>
              <p className='text-xs text-indigo-blue font-bold'>{x.order}</p>
              <p className='text-xs text-indigo-blue font-bold'>{x.name}</p>
              <p className='text-xs text-indigo-blue font-bold'>{x.address}</p>
              <p className='text-xs text-gray-300 font-bold'>{x.date}</p>
              <p className='text-xs text-indigo-blue font-bold'>{x.type}</p>
              <div className='flex gap-1 items-center'>
                {x.pstatus ? <button className={x.pstatus === 'Paid' ? 'paid' : 'fail'}>
                  <p>{x.pstatus}</p>
                </button> : ''}
                {x.dstatus ?
                  <button className={x.dstatus === 'Done' ? 'paid' : 'failed'}>
                    <p>{x.dstatus}</p>
                  </button> : ''}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className='md:flex-row my-4 justify-between items-center flex flex-col gap-1'>
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
