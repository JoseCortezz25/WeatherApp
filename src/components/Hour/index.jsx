import React from "react";
import "./styles.css";

export const Hour = ({ weather, addHour, temp }) => {
  return (
    <li className="Hour">
      <p className="HourTemp">{temp} °C</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt=""
      />
      <p>
        {new Date().getHours() + addHour}:{new Date().getMinutes()}
      </p>
    </li>
  );
};
