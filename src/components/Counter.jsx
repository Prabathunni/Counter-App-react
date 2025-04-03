import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // Track if the counter is running

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setCounter(prevCount => prevCount + 1); // Increase count every second
      }, 1000);
    } else {
      clearInterval(interval); // Stop counting when isRunning is false
    }

    return () => clearInterval(interval); // Cleanup when component unmounts
  }, [isRunning]); // Runs whenever isRunning changes

  function Reset() {
    setIsRunning(false); // Stop counter
    setCounter(0); // Reset to 0
  }

  function Start() {
    setIsRunning(true); // Start counter
  }

  return (
    <div className='container p-5 d-flex flex-column justify-content-center align-items-center'>
      <h1 style={{ fontSize: '170px' }}>{counter}</h1>
      <div>
        <Button variant="danger" onClick={Reset} className='px-4 me-2 rounded-pill'>Reset</Button>
        <Button variant="success" onClick={Start} className='px-4 rounded-pill'>Start</Button>
      </div>
    </div>
  );
}

export default Counter;
