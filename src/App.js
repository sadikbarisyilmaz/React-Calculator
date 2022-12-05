import './App.scss';
import Display from "./components/Display";
import Numpad from "./components/Numpad"
import { CalculationProvider } from './context/context';

function App() {
  return (
    <CalculationProvider>
      <div className="App">
        <div id="calculator">
          <Display />
          <Numpad />
        </div>
      </div>
    </CalculationProvider>

  );
}

export default App;
