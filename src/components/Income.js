import GooglePay from '../assets/Google Pay.png'
import Phonepe from '../assets/Phonepe.png'
import Amazon from '../assets/Amazon.png'
import UPI from '../assets/UPI-1.png'
import Bank from '../assets/Bank.svg'
import COD from '../assets/Cash on Delivery.svg'
import Paytm from '../assets/Paytm.png'

export default function Income() {

  const incomeList = [{
    img: GooglePay,
    mode: 'Google Pay',
    amt: "721,345",
  }, {
    img: Phonepe,
    mode: 'Phonepe',
    amt: "23,482",
  }, {
    img: Amazon,
    mode: 'Amazon',
    amt: "382",
  }, {
    img: UPI,
    mode: 'UPI',
    amt: "43,820",
  }, {
    img: Bank,
    mode: 'Bank Transfer',
    amt: "53,847",
  }, {
    img: COD,
    mode: 'Cash on Delivery',
    amt: "72,920",
  }, {
    img: Paytm,
    mode: 'Paytm',
    amt: "824",
  }]

  return (
    <div className="grow-[1]">
      <p className="p-5 text-xs md:text-xl font-bold text-indigo-blue">Income Recived By</p>
      {incomeList.map((x, index) => (
        <div className="flex items-center justify-between px-5 mb-0.5 bg-opacity-50 bg-alice-blue h-[39px] " key={index}>
          <div className="flex items-center justify-between gap-x-2.5">
            <img src={x.img} alt="payments" />
            <p className="text-sm font-medium text-gunmetal-black">{x.mode}</p>
          </div>
          <div>
            <p className="text-base font-medium text-gunmetal-black">${x.amt}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
