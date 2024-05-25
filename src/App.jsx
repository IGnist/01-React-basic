import { useState } from 'react'
import './App.css'

function App() {
  let [a1,seta1]=useState(10)
  const addValue=()=>{
    a1=a1+1
    if(a1>20)
    a1=20
    seta1(a1)
  }
  const RemoveValue=()=>{
    a1=a1-1
    if(a1<0)
    a1=0
    seta1(a1)

  }
  return (
    <>
      <h1>React</h1>
      <button onClick = {addValue}> 
      ADD - {a1}</button>
      <br />
      <button onClick={RemoveValue}>
      Substract - {a1}</button>
    </>
  );
}

export default App
