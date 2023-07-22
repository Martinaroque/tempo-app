import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecastDay m-3">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={35} />
      <div className="forecast temperature mt-2">
        <span className="forecastTempMax">
          {Math.round(props.data.temp.max)}º
        </span>
        <span className="forecastTempMin">
          {Math.round(props.data.temp.min)}º
        </span>
      </div>
    </div>
  );
}
