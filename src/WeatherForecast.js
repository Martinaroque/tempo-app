import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}
  let apiKey = "2980ff43226d67e53abfcdb6d457dcc8";
  let lat = props.coord.lat;
  let lon = props.coord.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="forecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">thu</div>
          <WeatherIcon code="01d" size={35} />
          <div className="forecast temperature">
            <span className="forecastTempMax">20º </span>
            <span className="forecastTempMin">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
