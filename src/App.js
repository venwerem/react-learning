import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

// This is called a fragment in React
{/* <></> */}

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
  const [value, setValue] = useState(5)

  const handleSubstraction = () => {
    setValue(value - 1)
  }

  const handleAddition = () => {
    setValue(value + 1)
  }


  return (
  <div>
    <p>{value}</p>
    <button onClick={handleSubstraction}>-</button>
    <button onClick={handleAddition}>+</button>
  </div>)
}




export default App;
