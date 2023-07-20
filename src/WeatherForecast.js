import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
