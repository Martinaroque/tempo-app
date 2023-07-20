import React from "react";

export default function FormatDate(props) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thuesday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minute = props.date.getMinutes();
  return (
    <div>
      {day} {hours}:{minute}
    </div>
  );
}
