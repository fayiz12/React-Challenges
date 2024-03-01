import { useState, useEffect } from "react";

const Advice = () => {
  const [advice, setAdvice] = useState("click the button");
  const fetched_data = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
  };

  return (
    <div className="Advice-root">
      <div className="Advice-parent">
        <div className="Advice-text">"{advice}"</div>
        <button onClick={fetched_data}>Random Advice</button>
      </div>
    </div>
  );
};

export default Advice;
