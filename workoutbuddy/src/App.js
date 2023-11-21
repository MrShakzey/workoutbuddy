import logo from './logo.svg';
import './App.css';
import DayLog from './components/DayLog';

function App() {
  return (
    <div className="App">
      <DayLog date={new Date()} />
    </div>
  );
}

export default App;
