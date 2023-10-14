import './App.css';
// import Income from './components/Income';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Target from './components/Target';
// import Card from './components/Card';

// import DropDown from './assets/Drop Down.svg'
import Earning from './components/Earning';
import ProfitLost from './components/ProfitLost';

function App() {
  return (
    <div className="App">
      <div className='flex'>
        <div className='hidden md:block'>
          <Sidebar />
        </div>
        <div className='grow '>
          <div>
            <Navbar />
          </div>
          <div className='flex flex-wrap'>
            <Target />
            <Earning />
            <ProfitLost />
          </div>
        </div>
      </div>
      {/* 
      <Income /> */}

    </div>
  );
}

export default App;
