import React from "react";
import "./ResultView.scss";
// import "./CityName/CityName";
import CityName from "./CityName/CityName";

import Today from "./Days/Today/Today";

const ResultView = props => {
  const {
    name,
    city,
    today,
    error,
    day3,
    day4,
    day5,
    tomorrow,
    country
  } = props.weather;

  let weather = null;

  if (!error && city) {
    weather = (
      <div className="container">
        <div className="result__box">
          <CityName name={name} country={country} />
          <Today weather={today} />
          <div className="result__info">
            <div className="result__day-wrapper">
              <h2 className="result__day">Tomorrow</h2>
              <img
                src={`https://openweathermap.org/img/w/${
                  tomorrow.weather[0].icon
                }.png`}
                alt="Weather condition"
              />
              <span className="result__description">
                {tomorrow.weather[0].description}
              </span>
            </div>
            <div className="result__details">
              <span className="result__temperature">
                <i className="fas fa-thermometer-half" />
                Temperature: {tomorrow.main.temp.toFixed()} &#176;C
              </span>
              <span className="result__min-temp">
                <i className="fas fa-thermometer-empty" />
                Min temp: {tomorrow.main.temp_min.toFixed()} &#176;C
              </span>
              <span className="result__max-temp">
                <i className="fas fa-thermometer-full" />
                Max temp: {tomorrow.main.temp_max.toFixed()} &#176;C
              </span>
              <span className="result__wind-speed">
                <i className="fas fa-wind" />
                Wind speed: {(tomorrow.wind.speed * 3.6).toFixed()} km/h
              </span>
              <span className="result__humidity">
                <i className="fas fa-tint" />
                Humidity: {tomorrow.main.humidity}%
              </span>
              <span className="result__pressure">
                <i className="fas fa-compress" />
                Pressure: {tomorrow.main.pressure} hPa
              </span>
              <span className="result__cloudiness">
                <i className="fas fa-cloud" />
                Cloudiness: {tomorrow.clouds.all}%
              </span>
            </div>
          </div>
          <div className="result__info">
            <div className="result__day-wrapper">
              <h2 className="result__day">{day3.dt_txt.substr(5, 11)}</h2>
              <img
                src={`https://openweathermap.org/img/w/${
                  day3.weather[0].icon
                }.png`}
                alt="Weather condition"
              />
              <span className="result__description">
                {day3.weather[0].description}
              </span>
            </div>
            <div className="result__details">
              <span className="result__temperature">
                <i className="fas fa-thermometer-half" />
                Temperature: {day3.main.temp.toFixed()} &#176;C
              </span>
              <span className="result__min-temp">
                <i className="fas fa-thermometer-empty" />
                Min temp: {day3.main.temp_min.toFixed()} &#176;C
              </span>
              <span className="result__max-temp">
                <i className="fas fa-thermometer-full" />
                Max temp: {day3.main.temp_max.toFixed()} &#176;C
              </span>
              <span className="result__wind-speed">
                <i className="fas fa-wind" />
                Wind speed: {(day3.wind.speed * 3.6).toFixed()} km/h
              </span>
              <span className="result__humidity">
                <i className="fas fa-tint" />
                Humidity: {day3.main.humidity}%
              </span>
              <span className="result__pressure">
                <i className="fas fa-compress" />
                Pressure: {day3.main.pressure} hPa
              </span>
              <span className="result__cloudiness">
                <i className="fas fa-cloud" />
                Cloudiness: {day3.clouds.all}%
              </span>
            </div>
          </div>
          <div className="result__info">
            <div className="result__day-wrapper">
              <h2 className="result__day">{day4.dt_txt.substr(5, 11)}</h2>
              <img
                src={`https://openweathermap.org/img/w/${
                  day4.weather[0].icon
                }.png`}
                alt="Weather condition"
              />
              <span className="result__description">
                {day4.weather[0].description}
              </span>
            </div>
            <div className="result__details">
              <span className="result__temperature">
                <i className="fas fa-thermometer-half" />
                Temperature: {day4.main.temp.toFixed()} &#176;C
              </span>
              <span className="result__min-temp">
                <i className="fas fa-thermometer-empty" />
                Min temp: {day4.main.temp_min.toFixed()} &#176;C
              </span>
              <span className="result__max-temp">
                <i className="fas fa-thermometer-full" />
                Max temp: {day4.main.temp_max.toFixed()} &#176;C
              </span>
              <span className="result__wind-speed">
                <i className="fas fa-wind" />
                Wind speed: {(day4.wind.speed * 3.6).toFixed()} km/h
              </span>
              <span className="result__humidity">
                <i className="fas fa-tint" />
                Humidity: {day4.main.humidity}%
              </span>
              <span className="result__pressure">
                <i className="fas fa-compress" />
                Pressure: {day4.main.pressure} hPa
              </span>
              <span className="result__cloudiness">
                <i className="fas fa-cloud" />
                Cloudiness: {day4.clouds.all}%
              </span>
            </div>
          </div>
          <div className="result__info">
            <div className="result__day-wrapper">
              <h2 className="result__day">{day5.dt_txt.substr(5, 11)}</h2>
              <img
                src={`https://openweathermap.org/img/w/${
                  day5.weather[0].icon
                }.png`}
                alt="Weather condition"
              />
              <span className="result__description">
                {day5.weather[0].description}
              </span>
            </div>
            <div className="result__details">
              <span className="result__temperature">
                <i className="fas fa-thermometer-half" />
                Temperature: {day5.main.temp.toFixed()} &#176;C
              </span>
              <span className="result__min-temp">
                <i className="fas fa-thermometer-empty" />
                Min temp: {day5.main.temp_min.toFixed()} &#176;C
              </span>
              <span className="result__max-temp">
                <i className="fas fa-thermometer-full" />
                Max temp: {day5.main.temp_max.toFixed()} &#176;C
              </span>
              <span className="result__wind-speed">
                <i className="fas fa-wind" />
                Wind speed: {(day5.wind.speed * 3.6).toFixed()} km/h
              </span>
              <span className="result__humidity">
                <i className="fas fa-tint" />
                Humidity: {day5.main.humidity}%
              </span>
              <span className="result__pressure">
                <i className="fas fa-compress" />
                Pressure: {day5.main.pressure} hPa
              </span>
              <span className="result__cloudiness">
                <i className="fas fa-cloud" />
                Cloudiness: {day5.clouds.all}%
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div>{error ? `There is no ${city} on our planet` : weather}</div>
    </>
  );
};

export default ResultView;
