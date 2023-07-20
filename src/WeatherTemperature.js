import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celcius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  if (unit === "celcius") {
    return (
      <span>
        <span className="temperature">{props.celcius}</span>
        <span className="units">
          ºC |{" "}
          <a
            className="text-decoration-none"
            href="/"
            onClick={convertToFahrenheit}
          >
            ºF{" "}
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = Math.round((props.celcius * 9) / 5 + 32);
    return (
      <span>
        <span className="temperature">{fahrenheit}</span>
        <span className="units ">
          <a
            className="text-decoration-none"
            href="/"
            onClick={convertToCelcius}
          >
            {" "}
            ºC{" "}
          </a>
          | ºF{" "}
        </span>
      </span>
    );
  }
}
