import React, { useState } from "react";
import "./App.css";

const initialCount = 0;

const App = () => {
  const [count, setCount] = useState(initialCount);
  const [error, setError] = useState(false);

  const decrementCounter = () => {
    if (count > 0) setCount(count - 1);
    else setError(true);
  };

  const incrementCounter = () => {
    setCount(count + 1);
    if (error) setError(false);
  };

  const resetCounter = () => {
    setCount(initialCount);
    if (error) setError(false)
  }

  return (
    <div data-test-id="component-app" className="app">
      <h1 data-test-id="counter-display">
        The counter is currently&nbsp;
        <span data-test-id="counter">{count}</span>
      </h1>
      <button data-test-id="increment-button" onClick={incrementCounter}>
        Increment counter
      </button>
      <button data-test-id="decrement-button" onClick={decrementCounter}>
        Decrement counter
      </button>
      <button
        data-test-id="reset-button"
        onClick={resetCounter}
      >
        Reset counter
      </button>
      {error && (
        <p data-test-id="error-message" className="error">
          The counter cannot go below 0
        </p>
      )}
    </div>
  );
};

export default App;
