
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
  //const [answer, setAnswer] = useState(0)
  const [value, setvalue] = useState(0)
  //const [secondValue, setsecondValue] = useState(0)
  const [calculation, setCalculation] = useState('')

  const handleButton= (secondvalue)=>
  {
    setvalue(value + secondvalue);
  }


  const handleAddition = () => {
   setCalculation('+')
  }

  const handleSubtraction = () =>{
    setCalculation('-')
  }

  const handleResult = () => {
   if(calculation === '+') {
    //const result = value + secondValue;
  
    //setAnswer(result)
   }
   
   if(calculation === '-'){
    //const result = value - secondValue;
    //setAnswer(result)
   }
  }

  

  


  return (
  <div>
    <p>{}</p>
  
    <button onClick={handleButton(1)}>1</button>
    <button onClick={handleButton(2)}>2</button>
    <button onClick={handleButton(3)}>3</button>
    <br/>
    <button onClick={handleButton(4)}>4</button>
    <button onClick={handleButton(5)}>5</button>
    <button onClick={handleButton(6)}>6</button>
    <br/>
    <button onClick={handleButton(7)}>7</button>
    <button onClick={handleButton(8)}>8</button>
    <button onClick={handleButton(9)}>9</button>
    <button onClick={handleButton(0)}>0</button>
    
    <button onClick={handleSubtraction}>-</button>
   
    <button onClick={handleAddition}>+</button>
    <button onClick={handleResult}>=</button>
    <br/>
    
  </div>)
}




export default App;
