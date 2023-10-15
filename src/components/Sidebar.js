import Dashboard from "../assets/Dashboard.svg";
import Order from "../assets/Orders.svg";
import Product from "../assets/Products.svg";
import Customer from "../assets/Customer.svg";
import Message from "../assets/Message.svg";
import Setting from "../assets/Setting.svg";
import Test from "../assets/Test Logo.svg";

export default function Sidebar() {
  return (
    <div className="h-screen px-4  bg-yankees-blue">
      <div className="pt-6">
        <img src={Test} alt="logo" />
      </div>
      <div className="text-white text-opacity-60">
        <div className="flex items-center gap-3 h-[60px] px-4 dash--bg">
          <img src={Dashboard} alt="sidebar-icon" width={20} />
          <p className="font-medium text-princeton-orange">Dashboard</p>
        </div>
        <div className="flex items-center gap-3 h-[60px] px-4">
          <img src={Order} alt="sidebar-icon" width={20} />
          <p className="font-medium">Orders</p>
        </div>
        <div className="flex items-center gap-3 h-[60px] px-4">
          <img src={Product} alt="sidebar-icon" width={20} />
          <p className="font-medium">Products</p>
        </div>
        <div className="flex items-center gap-3 h-[60px] px-4">
          <img src={Customer} alt="sidebar-icon" width={20} />
          <p className="font-medium">Customer</p>
        </div>
        <div className="flex items-center gap-3 h-[60px] px-4">
          <img src={Message} alt="sidebar-icon" width={20} />
          <p className="font-medium">Message</p>
        </div>
        <div className="flex items-center gap-3 h-[60px] px-4">
          <img src={Setting} alt="sidebar-icon" width={20} />
          <p className="font-medium">Settings</p>
        </div>
      </div>
    </div>
  );
}
