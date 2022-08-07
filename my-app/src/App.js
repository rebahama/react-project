import './App.css';
import FunctionalGreeting from './components/FuncionalGreeting';
import FunctionalGreetingWithProps from './components/FuncionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      
      <StatefulGreeting greeting="I am a stateful class compenent" name="john"/>
      <FunctionalGreeting/>
      <FunctionalGreetingWithProps greeting="nice to meet you" name="john doe" />
    </div>
  );
}

export default App;
