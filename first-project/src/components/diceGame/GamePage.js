import { useState } from "react";
import Lose from "./Lose";
import Won from "./Won";

const GamePage = () => {
  const [selectednum, setSelectednum] = useState(null);
  const [showRules, setShowRules] = useState(false);
  const [random, setRandom] = useState(1);
  const [score, setScore] = useState(0);
  const nums = [1, 2, 3, 4, 5, 6];
  if (score <= -20) {
    return <Lose />;
  } else if (score >= 20) {
    return <Won />;
  }
  const randomNum = (max, min) => {
    if (selectednum === null) {
      alert("please select any number");
    } else {
      const new_random = Math.floor(Math.random() * (max - min) + min);
      setRandom(new_random);
      if (new_random === selectednum) {
        setScore(score + new_random);
      } else {
        setScore(score - 2);
      }
    }
  };

  return (
    <div className="GamePage-parent">
      <div className="GamePage-root">
        <h1> SCORE :- {score} </h1>
        <ul className="dice-num-buttons">
          {nums.map((value, i) => (
            <li key={i}>
              <button
                style={
                  selectednum === value
                    ? {
                        backgroundColor: "white",
                        color: "black",
                        transition: "0.3s background ",
                      }
                    : {}
                }
                onClick={() => {
                  setSelectednum(value);
                }}
              >
                {value}
              </button>
            </li>
          ))}
        </ul>
        {selectednum === null ? (
          <h4 className="Game-wrong-guess">You Did'nt Select any Number</h4>
        ) : null}

        <h4>Select A Number</h4>
      </div>
      <div className="Game-reset-rules">
        <img
          className="dice-img"
          src={`/rollDice/dice_${random}.png`}
          onClick={() => randomNum(1, 7)}
        ></img>
        <h3>Click On Dice To Roll </h3>
        <button className="Game-reset">Reset Score</button>
        <button className="Game-rule" onClick={() => setShowRules(!showRules)}>
          Show Rules
        </button>
        <p></p>
      </div>
      {showRules === true ? (
        <div className="Game-rules">
          <h3 className="Game-rules-title"> How To Play Dice Game</h3>
          <div className="Game-rules-text">
            Select any number
            <br />
            Click on dice image <br />
            after click on dice if selected number is equal to dice number you
            will get same point as dice if you get wrong guess then 2 point will
            be deducted
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default GamePage;
