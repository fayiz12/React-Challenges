import { City_url } from "../api";
import { City_data } from "../api";
import { useState, useEffect } from "react";
import ClimateCard from "./weatherCompomemt/ClimateCard";

const WeatherApp = () => {
  const [city, setCity] = useState("Delhi");
  const [Geo_data,setGeo_data]=useState(null)

  const fetchedData = async () => {
    const response = await fetch(
      `${City_url}cities?minPopulation=1000000&namePrefix=${city}`,
      City_data,
    );
    const result = await response.json();
    setGeo_data(result.data[0])
  };
  useEffect(() => {
    fetchedData();
  }, []);

  return (
    <div>
      <input onChange={(e) => setCity(e.target.value)}></input>
      <ClimateCard data={Geo_data}/>
    </div>
  );
};

export default WeatherApp;
