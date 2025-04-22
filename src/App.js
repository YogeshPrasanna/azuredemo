import React, { useState } from 'react'; // Import useState
import './App.css';

function App() {
  const [count, setCount] = useState(0); // Initialize state for the counter

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
        <p>Current Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </header>
    </div>
  );
}

export default App;