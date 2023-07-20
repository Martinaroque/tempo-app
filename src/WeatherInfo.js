import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-left">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
            <span className="temperature">{props.data.temperature}</span>
            <span className="units">ºC</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{props.data.humidity}</li>
            <li>Wind:{props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
