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
import ComponentDidMount from './components/ComponentDidMount';
import ComponentDidUpdate from './components/ComponentDidUpdate';
import ComponentWillUnmount from './components/ComponentWillUnmount';
import ControlledForm from './components/ControlledForm';
import UnControlledForm from './components/UnControlledForm';
import ControlledFormHookState from './components/ControlledFormHooksState';
import UseStateArray from './components/UseStateArray';
import HooksCounter from './components/HooksCounter';
import AddNumber from './components/AddNumber';
import UseEffectCounterContainer from './components/UseEffectCounterContainer';
import ClassHttp from './components/ClassHttp';
import ClassHttpPost from './components/ClassHttpPost';
import HttpHooks from './components/HttpHooks';



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
      <ComponentDidMount/>
      <ComponentDidUpdate/>
      <ComponentWillUnmount/>
      <ControlledForm/>
      <UnControlledForm/>
      <ControlledFormHookState/>
      <UseStateArray/>
      <HooksCounter name="john doe"/>
      <AddNumber/>
      <UseEffectCounterContainer/>
      <ClassHttp/>
      <ClassHttpPost/>
      <HttpHooks/>


    </div>
  );
}

export default App;
