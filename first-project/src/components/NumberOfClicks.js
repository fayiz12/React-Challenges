import { useState, useEffect } from "react";

const NumberOfClicks = () => {
  const [seconds, setSeconds] = useState(10);
  const [clicks, setClicks] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(interval);
          setDisableButton(true);
          return prevSeconds;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handler = () => {
    if (seconds > 0) {
      setClicks((prevClicks) => prevClicks + 1);
    }
  };

  return (
    <div className="click-root">
      <h1>Timer : {seconds}</h1>
      <h1>No.of clicks : {clicks}</h1>
      <div>
        <button onClick={handler} disabled={disableButton}>
          click
        </button>
      </div>
    </div>
  );
};

export default NumberOfClicks;
