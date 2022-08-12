import './App.css';
import FunctionalGreeting from './components/FuncionalGreeting';
import FunctionalGreetingWithProps from './components/FuncionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import EventClass from './components/EventClass';
import EventFunctional from './components/EventFunctional';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingCompClass from './components/NestingCompClass';
import MethodParentClass from './components/MethodParentClass';
import RenderingList from './components/RenderingList';

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="I am a stateful class compenent" name="john"/>
      <FunctionalGreeting/>
      <FunctionalGreetingWithProps greeting="nice to meet you" name="john doe" />
      <EventFunctional/>
      <EventClass/>
      <ConditionalRenderingFunctional connected={false}/>
      <ConditionalRenderingClass/>
      <NestingCompClass/>
      <MethodParentClass/>
      <RenderingList/>

    </div>
  );
}

export default App;
