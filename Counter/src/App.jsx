import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const isComposite = (num) => {
    if (num > 1 && !isPrime(num)) return true;
    return false;
  };

  return (
    <div className="App">
      <h1>Welcome to Counter</h1>
      <div className="button-container">
        <button onClick={() => setCount(count - 1)} disabled={count === 0}>- 1</button>
        <button onClick={() => setCount(count + 1)}>+ 1</button>
      </div>
      <button onClick={() => setCount(0)} className="reset-button">Reset Count</button>
      <h2>Count: {count}</h2>
      <p>Composite Number: {isComposite(count) ? 'True' : 'False'}</p>
      <p>Prime Number: {isPrime(count) ? 'True' : 'False'}</p>
    </div>
  );
}

export default App;
