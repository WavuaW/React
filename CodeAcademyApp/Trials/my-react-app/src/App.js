import React, { useState } from 'react';
import './App.css';

function App() {
  // State for the counter
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </header>
    </div>
  );
}

export default App;
