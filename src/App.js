import './App.css';
import Income from './components/Income';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Income />
      <Sidebar />
    </div>
  );
}

export default App;
