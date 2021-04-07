import React, { useState } from "react";
import "./App.css";

const initialCount = 0;

const App = () => {
  const [count, setCount] = useState(initialCount);

  return (
    <div data-test-id="component-app" className="App">
      <h1 data-test-id="counter-display">
        The counter is currently&nbsp;
        <span data-test-id="counter">{count}</span>
      </h1>
      <button
        data-test-id="increment-button"
        onClick={() => setCount(count + 1)}
      >
        Increment counter
      </button>
      <button 
        data-test-id="decrement-button" 
        onClick={() => setCount(count - 1)}
      >
        Decrement counter
      </button>
      <button
        data-test-id="reset-button"
        onClick={() => setCount(initialCount)}
      >
        Reset counter
      </button>
    </div>
  );
};

export default App;
