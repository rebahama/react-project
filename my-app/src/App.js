import './App.css';
import FunctionalGreeting from './components/FuncionalGreeting';
import FunctionalGreetingWithProps from './components/FuncionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      
      <FunctionalGreeting/>
      <FunctionalGreetingWithProps greeting="nice to meet you" name="john doe" />
    </div>
  );
}

export default App;
