import React from "react";

export default function formatDate(props) {
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let day = days[props.date.getDay()];
  let hours = props.date.getHour();
  let minute = props.date.getMinutes();
  return (
    <div>
      {day} {hours}:{minute}
    </div>
  );
}
