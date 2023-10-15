import React from 'react'
import Dashboard from "../assets/Dashboard.svg";
import Order from "../assets/Orders.svg";
import Product from "../assets/Products.svg";
import Customer from "../assets/Customer.svg";
import Message from "../assets/Message.svg";
import Setting from "../assets/Setting.svg";
export default function Mobile() {
  return (
    <div className="px-1 py-2 bg-yankees-blue">
      <div className="flex items-center h-[50px] justify-between text-xs text-white text-opacity-60">
        <div className="flex flex-col items-center gap-2">
          <img src={Dashboard} alt="sidebar-icon" width={20} />
          <p className="font-medium text-princeton-orange">Dashboard</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={Order} alt="sidebar-icon" width={20} />
          <p className="font-medium">Orders</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={Product} alt="sidebar-icon" width={20} />
          <p className="font-medium">Products</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={Customer} alt="sidebar-icon" width={20} />
          <p className="font-medium">Customer</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={Message} alt="sidebar-icon" width={20} />
          <p className="font-medium">Message</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={Setting} alt="sidebar-icon" width={20} />
          <p className="font-medium">Settings</p>
        </div>
      </div>
    </div>
  )
}
