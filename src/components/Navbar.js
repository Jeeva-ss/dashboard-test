import React from 'react'


import Mail from '../assets/Mail.svg'
import Notification from '../assets/Notification.svg'
import User from '../assets/User.png'
import DropDown from '../assets/Drop Down.svg'

export default function Navbar() {
  return (
    <div className='shadow-xl flex items-center justify-between px-7 h-[70px]'>
      <div>
        <p className='text-xl font-semibold text-gunmetal-black'>Dashboard</p>
      </div>
      <div className='flex items-center justify-between gap-3.5'>
        <img src={Mail} alt="mail" className='p-2 rounded bg-light-orange' />
        <img src={Notification} alt="notification" className='p-1.5 rounded bg-light-orange' />
        <img src={User} alt="user" />
        <p className='text-xs text-gunmetal-black'>John Doe</p>
        <img src={DropDown} alt="dropdown" />
      </div>
    </div>
  )
}
