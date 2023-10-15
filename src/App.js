import './App.css';
import Income from './components/Income';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Target from './components/Target';
import Earning from './components/Earning';
import ProfitLost from './components/ProfitLost';
import Country from './components/Country';
import Overview from './components/Overview';
import Order from './components/Order';
import Mobile from './components/Mobile';

function App() {
  return (
    <div className="relative App">
      <div className='flex'>
        <div className='hidden w-2/4 md:block bg-yankees-blue xl:w-auto'>
          <Sidebar />
        </div>
        <div className='grow'>
          <div>
            <Navbar />
          </div>
          <p className='m-2 text-xl font-bold text-indigo-blue'>Overview</p>
          <div>
            <Overview />
          </div>
          <div className='flex flex-wrap'>
            <Country />
            <Income />
          </div>
          <div className='flex flex-wrap'>
            <Target />
            <Earning />
            <ProfitLost />
          </div>
          <Order />
        </div>
      </div>
      <div className='fixed bottom-0 left-0 z-20 block w-full md:hidden'>
        <Mobile />
      </div>
    </div>
  );
}

export default App;
