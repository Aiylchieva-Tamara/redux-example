import './App.css';
import ColorDisplay from './components/ColorDisplay';
import CounterAddControls from './components/CounterAddControls';
import CounterDisplay from './components/CounterDisplay';
import CounterSimpleControls from './components/CounterSimpleControls';

function App() {
  return (
    <div className="App">
      <ColorDisplay />
      <CounterDisplay />
      <CounterSimpleControls />
      <CounterAddControls />
    </div>
  );
}

export default App;

