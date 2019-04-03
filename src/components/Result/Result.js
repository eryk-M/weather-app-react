import React from "react";
import "./Result.scss";
import Loader from "../../components/Loader/Loader";

import Day1 from "./Day1/Day1";
import Day2 from "./Day2/Day2";
import Day3 from "./Day3/Day3";
import Day4 from "./Day4/Day4";
import Day5 from "./Day5/Day5";

const Result = props => {
  const filteredDays = [];
  //filtruje poszczegolne dni i zwracam do tablicy -> openweather api zmienia liste co 3 godziny, wiec jeden dzien raz moze miec 3 wyniki, a raz 8 w zaleznosci od pory dnia
  for (let i = 0; i < 5; i++) {
    const day = new Date();
    day.setDate(day.getDate() + i);
    const dayISO = day.toISOString().substr(0, 10);
    filteredDays[i] = props.weather.forecast.list.filter(
      filter => filter.dt_txt.substr(0, 10) === dayISO
    );
  }
  const tempMin = filteredDays[0].map(min => +min.main.temp_min.toFixed());
  return (
    <div className="result">
      {props.weather.forecast.isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="result__day1">
            <h1>
              {props.weather.forecast.city.name},{" "}
              {props.weather.forecast.city.country}
            </h1>

            <p className="result__day1-desc">
              {props.weather.forecast.list[0].weather[0].description}
            </p>
            <div className="result__day1-top">
              <i
                className={`wi-owm-${
                  props.weather.forecast.list[0].weather[0].id
                }`}
              />
              <p className="result__day1-max">
                {props.weather.forecast.list[0].main.temp.toFixed()}
                &#176;C
              </p>
            </div>
            <p className="result__day1-min">
              {Math.min(...tempMin) === Infinity
                ? "...open weather have to refresh api"
                : Math.min(...tempMin) + "°C"}
            </p>
          </div>

          <div className="result__main">
            <Day1 weather={filteredDays[0]} />
            <Day2 weather2={filteredDays[1]} />
            <Day3 weather3={filteredDays[2]} />
            <Day4 weather4={filteredDays[3]} />
            <Day5 weather5={filteredDays[4]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Result;
