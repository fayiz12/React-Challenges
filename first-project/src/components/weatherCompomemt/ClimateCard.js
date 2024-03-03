import { Api_key } from "../../constants";
import sunny from "../../images/sunny.png";

const ClimateCard = (props) => {
  // const fetch_climate = async () => {
  //   const response = await fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?lat=${props.data.latitude}&lon=${props.data.longitude}&appid=${Api_key}`,
  //   );
  //   const result = await response.json();
  //   console.log(result);
  // };
  // fetch_climate();
  return (
    <div className="climate-root-card">
      <div className="climate-parent-card">
        <div className="climate-temp">
          <img className="sunny" src={sunny}></img>
          <h4>20°C</h4>
        </div>
        <h1>Delhi</h1>
      </div>
      <div className="climate-forecast">
        <h4>Mon</h4>
        <h4>Mon</h4>
        <h4>Mon</h4>
        <h4>Mon</h4>
        <h4>Mon</h4>
      </div>
    </div>
  );
};

export default ClimateCard;
