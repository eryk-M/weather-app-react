import React, { Component } from "react";
import "./Result.scss";
import Loader from "../../components/Loader/Loader";

import Day1 from "./Day1/Day1";
import Day2 from "./Day2/Day2";
import Day3 from "./Day3/Day3";
import Day4 from "./Day4/Day4";
import Day5 from "./Day5/Day5";

let filteredDays = [];

class Result extends Component {
  renderDays = () => {
    for (const [key, value] of Object.entries(filteredDays)) {
      console.log(key, value[0]);
    }
  };
  findWeather = () => {
    const filteredDays = [];
    const content = [];
    for (let i = 0; i < 5; i++) {
      const day = new Date();
      day.setDate(day.getDate() + i);
      const dayISO = day.toISOString().substr(0, 10);
      filteredDays[i] = this.props.weather.forecast.list.filter(
        filter => filter.dt_txt.substr(0, 10) === dayISO
      );
      const cwel = filteredDays[i].map();
      filteredDays[i].map(day => {
        content.push(
          <>
            <p>Temp {day.main.temp}</p>
          </>
        );
      });
      // content.push(<h1>{filteredDays[i].main.temp}</h1>);
      // console.log(filteredDays[i].main.temp);
    }
    return content;
  };

  render() {
    // const tempMin = filteredDays[0].map(min => +min.main.temp_min.toFixed());
    // this.findWeather();
    // let filteredDays = [];
    for (let i = 0; i < 5; i++) {
      const day = new Date();
      day.setDate(day.getDate() + i);
      const dayISO = day.toISOString().substr(0, 10);
      filteredDays[i] = this.props.weather.forecast.list.filter(
        filter => filter.dt_txt.substr(0, 10) === dayISO
      );
      console.log(filteredDays[i].map(day => day));
    }
    // this.renderDays();
    return (
      <div className="result">
        {this.findWeather()}
        {this.props.weather.forecast.isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="result__day1">
              <h1>
                {this.props.weather.forecast.city.name},{" "}
                {this.props.weather.forecast.city.country}
              </h1>

              <p className="result__day1-desc">
                {this.props.weather.forecast.list[0].weather[0].description}
              </p>
              <div className="result__day1-top">
                <i
                  className={`wi-owm-${
                    this.props.weather.forecast.list[0].weather[0].id
                  }`}
                />
                <p className="result__day1-max">
                  {this.props.weather.forecast.list[0].main.temp.toFixed()}
                  &#176;C
                </p>
              </div>
              {/* <p className="result__day1-min">{Math.min(...tempMin)}&#176;C</p> */}
            </div>

            <div className="result__main">
              {/* {filteredDays.map(day => (
                <div>
                  <h1>{day}</h1>
                </div>
              ))} */}
              {/* <Day1 weather={filteredDays[0]} />
              <Day2 weather2={filteredDays[1]} />
              <Day3 weather3={filteredDays[2]} />
              <Day4 weather4={filteredDays[3]} />
              <Day5 weather5={filteredDays[4]} /> */}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Result;
