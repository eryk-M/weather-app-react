import React from "react";

import ResultView from "../../ResultView";

const Today = props => {
  console.log(props.today.weather);
  return (
    <div className="result__info">
      <div className="result__day-wrapper">
        <h2 className="result__day">Today</h2>
        <img
          src={`https://openweathermap.org/img/w/${props.weather[0].icon}.png`}
          alt="Weather condition"
        />
        <span className="result__description">
          {props.weather.weather[0].description}
        </span>
      </div>
      <div className="result__details">
        <span className="result__temperature">
          <i
            className="fas fa-thermometer-half"
            style={{
              color: "goldenrod"
            }}
          />
          Temperature: {props.main.temp.toFixed()} &#176;C
        </span>
        <span className="result__min-temp">
          <i className="fas fa-thermometer-empty" />
          Min temp: {props.weather.main.temp_min.toFixed()} &#176;C
        </span>
        <span className="result__max-temp">
          <i className="fas fa-thermometer-full" />
          Max temp: {props.weather.main.temp_max.toFixed()} &#176;C
        </span>
        <span className="result__wind-speed">
          <i className="fas fa-wind" />
          Wind speed: {(props.weather.wind.speed * 3.6).toFixed()} km/h
        </span>
        <span className="result__humidity">
          <i className="fas fa-tint" />
          Humidity: {props.weather.main.humidity}%
        </span>
        <span className="result__pressure">
          <i className="fas fa-compress" />
          Pressure: {props.weather.main.pressure} hPa
        </span>
        <span className="result__cloudiness">
          <i className="fas fa-cloud" />
          Cloudiness: {props.weather.clouds.all}%
        </span>
      </div>
    </div>
  );
};

export default Today;
