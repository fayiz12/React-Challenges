import { useState } from "react";

const Color = () => {
  const [color, setColor] = useState("red");
  return (
    <div className="color-root" style={{ backgroundColor: color }}>
      <label>Enter a color: </label>
      <input
        className="color-input"
        onChange={(e) => setColor(e.target.value)}
      ></input>
    </div>
  );
};

export default Color;
