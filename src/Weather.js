import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let [ready, setReady] = useState(false);
  let [temperature, setTemperature] = useState(null);
  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <h1 className="header">Type a city</h1>
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary"
              ></input>
            </div>
          </div>
        </form>

        <ul>
          <li>sunday : 07:00</li>
          <li>Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny"
            />
            <span className="temperature">{temperature}</span>
            <span className="units">ºC</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Percipitations</li>
              <li>Humidity</li>
              <li>Wind</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "2980ff43226d67e53abfcdb6d457dcc8";
    let city = "lisbon";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
    return "Loading..";
  }
}
