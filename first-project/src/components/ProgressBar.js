import { useState } from "react";

const ProgressBar = () => {
  const [input, setInput] = useState(10);
  const calculate = (300 / 100) * input;
  const handler = (e) => {
    const value = parseInt(e.target.value);
    if (value < 101 && value > 0) {
      setInput(value);
    }
  };
  return (
    <div className="progress-bar-parent">
      <div className="container">
        <div className="inner-container" style={{ width: calculate }}>
          {`${input}` + "%"}
        </div>
      </div>
      <div className="progress-bar-input-container">
        <label className="progress-bar-label">Progress Bar Input</label>
        <input
          className="progress-bar-input"
          type="number"
          onChange={(e) => handler(e)}
        ></input>
      </div>
    </div>
  );
};

export default ProgressBar;
