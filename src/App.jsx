import { useState } from 'react'
import './App.css'


function App() {
  let [counter, setCounter] = useState(15);
  function addValue() {
    if (counter < 20) {
      setCounter(counter + 1);
    }
    else
      setCounter(counter);
  }
  function RemoveValue() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    else
      setCounter(counter);
  }
  return (
    <>
      <h1>React</h1>
      <button onClick={addValue}>
        ADD - {counter}</button>
      <br />
      <button onClick={RemoveValue}>
        Substract - {counter}</button>
    </>
  );
}

export default App
