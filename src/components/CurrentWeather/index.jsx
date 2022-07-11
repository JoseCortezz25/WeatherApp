import React from "react";
import { useAPI } from "../../context/ApiContext";
import "./styles.css";

export const CurrentWeather = () => {
  const weather = useAPI();
  console.log(weather);
  if (!weather) {
    return <p>Loading</p>;
  }

  return (
    <section className="currentWeather">
      <div className="currentWeather--details">
        <p className="location">{weather.timezone}</p>
        <div className="currentTemperature">
          <span className="tempCurrent">{weather.current.temp} °C</span>
          <div className="currentWeather--img">
            <img
              src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
              alt="Weather"
            />
          </div>
        </div>
        <div className="currentWeather--actual">
          it's
          {weather.current.weather.map((type) => (
            <h3 key={type.id}>{type.main}</h3>
          ))}
        </div>
      </div>

      <ul className="currentWeather--stats">
        <li>
          <span className="subvalue">{weather.current.feels_like} °C</span>
          <span className="subtitle">Feels</span>
        </li>
        <li>
          <span className="subvalue">{weather.current.pressure} hPa</span>
          <span className="subtitle">Pressure</span>
        </li>
        <li>
          <span className="subvalue">{weather.current.wind_speed} km/h</span>
          <span className="subtitle">Wind</span>
        </li>
        <li>
          <span className="subvalue">{weather.current.humidity}%</span>
          <span className="subtitle">Humidity</span>
        </li>
      </ul>
    </section>
  );
};
