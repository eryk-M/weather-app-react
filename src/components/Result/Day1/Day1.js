import React, { Component } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import CanvasJSReact from "../../../assets/canvasjs.react";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Day1 extends Component {
  state = {
    open: true
  };
  handleSlide = e => {
    this.setState({
      open: !this.state.open
    });
    e.target.classList.toggle("rotate");
  };

  render() {
    const width = window.innerWidth;
    const tempMin = this.props.weather.map(min => +min.main.temp_min.toFixed());
    const tempMax = this.props.weather.map(max => +max.main.temp_max.toFixed());

    const temps = this.props.weather.map(temp => +temp.main.temp.toFixed());

    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "dark2", // "light1", "dark1", "dark2"
      title: {
        text: "Temperature by hour"
      },
      axisY: {
        title: "Temperature (in °C)",
        includeZero: false,
        suffix: " °C"
      },
      axisX: {
        title: "Hours",
        suffix: ":00",
        interval: 3,
        minimum: 0,
        maximum: 21
      },
      width: width,
      height: 140,
      data: [
        {
          type: "line",
          toolTipContent: "Hour {x}:00: {y} °C",
          dataPoints: [
            this.props.weather[0]
              ? {
                  x: this.props.weather[0].dt_txt.substr(11, 2) * 1,
                  y: temps[0]
                }
              : { x: 0, y: null },
            this.props.weather[1]
              ? {
                  x: this.props.weather[1].dt_txt.substr(11, 2) * 1,
                  y: temps[1]
                }
              : { x: 0, y: null },
            this.props.weather[2]
              ? {
                  x: this.props.weather[2].dt_txt.substr(11, 2) * 1,
                  y: temps[2]
                }
              : { x: 0, y: null },
            this.props.weather[3]
              ? {
                  x: this.props.weather[3].dt_txt.substr(11, 2) * 1,
                  y: temps[3]
                }
              : { x: 0, y: null },
            this.props.weather[4]
              ? {
                  x: this.props.weather[4].dt_txt.substr(11, 2) * 1,
                  y: temps[4]
                }
              : { x: 0, y: null },
            this.props.weather[5]
              ? {
                  x: this.props.weather[5].dt_txt.substr(11, 2) * 1,
                  y: temps[5]
                }
              : { x: 0, y: null },
            this.props.weather[6]
              ? {
                  x: this.props.weather[6].dt_txt.substr(11, 2) * 1,
                  y: temps[6]
                }
              : { x: 0, y: null },
            this.props.weather[7]
              ? {
                  x: this.props.weather[7].dt_txt.substr(11, 2) * 1,
                  y: temps[7]
                }
              : { x: 0, y: null }
          ]
        }
      ]
    };
    if (width < 376 && width > 321) {
      options.width = 190;
    } else if (width < 321) {
      options.width = 155;
      options.height = 110;
    } else if (width > 410) {
      options.width = 220;
    }
    return (
      <>
        {this.props.weather[0] ? (
          <>
            <div className="result__main-item">
              <p>Today</p>
              <div className="result__main-item-right">
                <i className="wi-owm-800" />
                <p className="result__main-item-right-temp">
                  {this.props.weather[0].main.temp.toFixed()}&#176;C /{" "}
                  {Math.min(...tempMin)}&#176;C
                </p>

                <i
                  onClick={this.handleSlide}
                  className="fas fa-chevron-down rotate"
                />
              </div>
            </div>
            <SlideDown className={"my-dropdown-slidedown"}>
              {this.state.open ? (
                <div className="result__main-item-info result__today">
                  <div className="result__main-weather">
                    <p>
                      <i className="fas fa-thermometer-half" /> Temperature:{" "}
                      {this.props.weather[0].main.temp.toFixed()}&#176;C{" "}
                    </p>
                    <p>
                      <i className="fas fa-thermometer-empty" /> Min temp:{" "}
                      {Math.min(...tempMin)}&#176;C{" "}
                    </p>
                    <p>
                      <i className="fas fa-thermometer-full" /> Max temp:{" "}
                      {Math.max(...tempMax)}&#176;C{" "}
                    </p>
                    <p>
                      <i className="fas fa-wind" /> Wind speed:{" "}
                      {this.props.weather[0].wind.speed.toFixed()} m/s
                    </p>
                    <p>
                      <i className="fas fa-tint" /> Humidity:{" "}
                      {this.props.weather[0].main.humidity.toFixed()}%
                    </p>
                    <p>
                      <i className="fas fa-compress" /> Pressure:{" "}
                      {this.props.weather[0].main.pressure.toFixed()} hPa
                    </p>
                    <p>
                      <i className="fas fa-cloud" />
                      Cloudiness: {this.props.weather[0].clouds.all}%
                    </p>
                  </div>
                  <div className="result__main-canvas">
                    <CanvasJSChart options={options} />
                  </div>
                </div>
              ) : null}
            </SlideDown>
          </>
        ) : null}
      </>
    );
  }
}

export default Day1;
