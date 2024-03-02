import { Api_key } from "../../constants";

const ClimateCard = (props) => {
  const fetch_climate = () => {
    const response = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${props.data.latitude}&lon=${props.data.longitude}&appid=${Api_key}`,
    );
    const result = response.json();
    console.log(result);
  };
  fetch_climate();
  return (
    <div>
      <h1>Climate</h1>
    </div>
  );
};

export default ClimateCard;
