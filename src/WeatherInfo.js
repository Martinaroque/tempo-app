import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.city}</h1>
      <ul>
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={props.iconUrl} alt="sunny" />
          <span className="temperature">{props.temperature}</span>
          <span className="units">ºC</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{props.humidity}</li>
            <li>Wind:{props.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
