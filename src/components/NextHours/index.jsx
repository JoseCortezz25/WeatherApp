import React from "react";
import { useAPI } from "../../context/ApiContext";
import { Hour } from "../Hour";
import { Loading } from "../Loading"
import "./style.css";

export const NextHours = () => {
  const weather = useAPI();
  
  if (!weather) {
    return <Loading />;
  }
  
  weather.hourly.length = 6;

  return (
    <section className="HoursGeneral">
      <h2>Hours</h2>
      <ul className="Hours">
        {weather.hourly.map((hour, id) => (
          <Hour {...hour} addHour={id} key={id}/>
        ))}
      </ul>
    </section>
  );
};
