import diceLanding from "../../images/blackAndWhiteDice.jpeg";

const Landing = ({toggle}) => {
  return (
    <div className="Landing-root">
      <h1 className="Landing-title">
        <em>DICE GAME</em>
      </h1>
      <img
        className="LandingDice"
        src={diceLanding}
        alt="Landing-Dice-img"
      ></img>
      <button className="start-button" onClick={toggle}>
        {" "}
        <em>Start Game</em>
      </button>
    </div>
  );
};

export default Landing;
