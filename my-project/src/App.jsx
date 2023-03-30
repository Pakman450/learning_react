import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import FunctionClick from './components/FunctionClick'
import ClassFunctionClick from './components/ClassFunctionClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ParentComponent/>

      {/* <EventBind/> */}

      {/* <Message/>
      <FunctionClick/>
      <ClassFunctionClick/> */}
      {/* <Greet name='Steven'>
        <p1> heeee </p1> 
      </Greet>  



      <Greet name='teven'> 
        <button>Press me</button>
      </Greet> */}


      {/* <Greet name='even' children='lol'/>   */}
      {/* <Welcome name='bob'/>  */}
      {/* <Hello/> */} 
    </div>
  )
}

export default App


