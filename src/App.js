import './App.css';
import Income from './components/Income';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Target from './components/Target';
// import Card from './components/Card';

// import DropDown from './assets/Drop Down.svg'
import Earning from './components/Earning';
import ProfitLost from './components/ProfitLost';
import Country from './components/Country';
import Overview from './components/Overview';

function App() {
  return (
    <div className="App">
      <div className='flex'>
        <div className='hidden md:block bg-yankees-blue'>
          <Sidebar />
        </div>
        <div className='grow'>
          <div>
            <Navbar />
          </div>
          <p className='text-indigo-blue text-xl font-bold m-2'>Overview</p>
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
        </div>
      </div>



    </div>
  );
}

export default App;
