import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const add = () => setResult(Number(num1) + Number(num2));
  const subtract = () => setResult(Number(num1) - Number(num2));
  const multiply = () => setResult(Number(num1) * Number(num2));
  const divide = () => {
    if (Number(num2) !== 0) {
      setResult(Number(num1) / Number(num2));
    } else {
      alert("Cannot divide by zero");
    }
  };

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <div className="calculator">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Number 1"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Number 2"
        />
        <div className="buttons">
          <button onClick={add}>+</button>
          <button onClick={subtract}>-</button>
          <button onClick={multiply}>*</button>
          <button onClick={divide}>/</button>
        </div>
        {result !== null && <h2>Result: {result}</h2>}
      </div>
    </div>
  );
}

export default App;
