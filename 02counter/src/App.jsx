import { useState } from 'react'
import './App.css'
import ParentComponent from './components/ParentComponent';

function App() {
const[counter, setCounter] = useState(15);


  const addValue = () =>{
    setCounter(counter + 1);
  }
  const removeValue = () =>{
    setCounter(counter - 1);
  }
  return (
    <>
      {/* <h1>Chai or React</h1>
      <h3>Counter value : {counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>


       */}

      <ParentComponent />

    </>
  )
  }

export default App
