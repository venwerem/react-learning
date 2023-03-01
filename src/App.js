
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


const App =() => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setInput(input + e.target.name);
  }

  const handleClear = () => {
    setInput("");
    setResult("");
  }

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  }

  const handleEqual = () => {
    try {
      // eslint-disable-next-line no-eval
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} />
          <br/>
          <span>{result}</span>
        </div>
        <div className="keypad">
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <br/>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <br/>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <br/>
          <button name="0" onClick={handleClick}>0</button>
          <button name="-" onClick={handleClick}>&ndash;</button>
          <button name="+" onClick={handleClick}>+</button>
          <br/>
          <button name="/" onClick={handleClick}>&divide;</button>
          <button name="*" onClick={handleClick}>&times;</button>
          <button className="equal" onClick={handleEqual}>=</button>
          <br/>
          <button name="." onClick={handleClick}>.</button>
          <button className="clear" onClick={handleClear}>C</button>
          <button className="backspace" onClick={handleBackspace}>CE</button>
          
         
        </div>
      </div>
    </div>
  );
}

export default App;




