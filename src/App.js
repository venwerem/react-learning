import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

// This is called a fragment in React
//{/* <></> */}

// React Life cycle

// When an action is carried out,
// The state of the application changes
// The app re-renders to update the application

// React Hooks

// useState
// 1. Initial State
// 2. Set the new state

// useEffect


const App = () => {
  const [answer, setAnswer] = useState(0)
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [calculation, setCalculation] = useState('')


  const handleAddition = () => {
   setCalculation('+')
  }

  const handleSubtraction = () =>{
    setCalculation('-')
  }

  const handleResult = () => {
   if(calculation === '+') {
    const result = number1 + number2;
  
    setAnswer(result)
   }
   
   if(calculation === '-'){
    const result = number1 - number2;
    setAnswer(result)
   }
  }

  const handleButton1 = () => {
    setNumber1(1)
  }

  const handleButton2 = () => {
    setNumber2(2)
  }


  return (
  <div>
    <p>{answer}</p>
  
    <button onClick={handleButton1}>1</button>
    <button onClick={handleAddition}>+</button>
    <button onClick={handleSubtraction}>-</button>
    <button onClick={handleButton2}>2</button>
    <button onClick={handleResult}>=</button>
    <br/>
    
  </div>)
}




export default App;
