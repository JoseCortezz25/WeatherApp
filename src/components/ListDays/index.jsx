import React from "react";
import { Day } from "../Day";
import { useAPI } from "../../context/ApiContext";
import { Loading } from "../Loading";
import "./styles.css";

export const ListDays = () => {
  const weather = useAPI();

  if (!weather) {
    return <Loading />;
  }

  return (
    <section className="DailyGeneral">
      <h2>Daily</h2>
      <ul className="daily">
        {weather.daily.map((day, index) => (
          <Day key={day.dt} {...day} dayNumber={index} />
        ))}
      </ul>
    </section>
  );
};
