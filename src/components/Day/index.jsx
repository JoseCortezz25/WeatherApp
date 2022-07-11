import React from "react";
import { getCurrentDay } from "../../utils/getCurrentDay";
import "./styles.css";

export const Day = ({ weather, temp, dayNumber }) => {
  const date = getCurrentDay(dayNumber + 1);

  return (
    <li className="day">
      <p>{date.toLocaleString("en-US", {weekday: "long", day: "numeric"} )}</p>
      <img
        className="day__img"
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt="Weather img"
      />
      <div className="day__temp">
        <span className="tempMax">{temp.max} °C</span>
        <span className="">{temp.min} °C</span>
      </div>
    </li>
  );
};
