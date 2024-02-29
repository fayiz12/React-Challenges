import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (active) {
      interval = setInterval(() => {
        setSeconds((prev_secs) => prev_secs + 1);
      }, 1000);
    } else if (!active && seconds !== 0) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });

  const handleStart = () => {
    setActive(true);
  };

  const handleStop = () => {
    setActive(false);
  };

  const handleReset = () => {
    setActive(false);
    setSeconds(0);
  };

  return (
    <div>
      <h1>Timer</h1>
      <p>
        {Math.floor(seconds / 60)} min {seconds % 60} secs
      </p>
      <div className="buttons">
        <button className="startbtn" onClick={handleStart}>
          Start
        </button>
        <button className="stopbtn" onClick={handleStop}>
          Stop
        </button>
        <button className="resetbtn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
