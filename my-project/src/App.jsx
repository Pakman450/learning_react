import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Message/>

      {/* <Greet name='Steven'>
        <p1> heeee </p1> 
      </Greet>  



      <Greet name='teven'> 
        <button>Press me</button>
      </Greet>


      <Greet name='even'/>  
      <Welcome name='bob'/>  */}
      {/* <Hello/> */} 
    </div>
  )
}

export default App


