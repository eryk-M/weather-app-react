import React, { Component } from "react";
import $ from "jquery";
import CanvasJSReact from "../../../assets/canvasjs.react";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Day3 extends Component {
  handleSlide = e => {
    $(".result__day3").slideToggle("slow");
    $(e.target).toggleClass("rotate");
  };

  render() {
    const tempMin = this.props.weather3.map(
      min => +min.main.temp_min.toFixed()
    );
    const tempMax = this.props.weather3.map(
      max => +max.main.temp_max.toFixed()
    );
    const icon = this.props.weather3.map(icon => icon.weather[0]);
    const findIcon = icon.map(fi => fi.id);
    const temps = this.props.weather3.map(temp => +temp.main.temp.toFixed());
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
        interval: 3
      },
      width: 214,
      height: 140,
      data: [
        {
          type: "line",
          toolTipContent: "Hour {x}:00: {y} °C",
          dataPoints: [
            this.props.weather3[0]
              ? {
                  x: this.props.weather3[0].dt_txt.substr(11, 2) * 1,
                  y: temps[0]
                }
              : { x: 0, y: null },
            this.props.weather3[1]
              ? {
                  x: this.props.weather3[1].dt_txt.substr(11, 2) * 1,
                  y: temps[1]
                }
              : { x: 0, y: null },
            this.props.weather3[2]
              ? {
                  x: this.props.weather3[2].dt_txt.substr(11, 2) * 1,
                  y: temps[2]
                }
              : { x: 0, y: null },
            this.props.weather3[3]
              ? {
                  x: this.props.weather3[3].dt_txt.substr(11, 2) * 1,
                  y: temps[3]
                }
              : { x: 0, y: null },
            this.props.weather3[4]
              ? {
                  x: this.props.weather3[4].dt_txt.substr(11, 2) * 1,
                  y: temps[4]
                }
              : { x: 0, y: null },
            this.props.weather3[5]
              ? {
                  x: this.props.weather3[5].dt_txt.substr(11, 2) * 1,
                  y: temps[5]
                }
              : { x: 0, y: null },
            this.props.weather3[6]
              ? {
                  x: this.props.weather3[6].dt_txt.substr(11, 2) * 1,
                  y: temps[6]
                }
              : { x: 0, y: null },
            this.props.weather3[7]
              ? {
                  x: this.props.weather3[7].dt_txt.substr(11, 2) * 1,
                  y: temps[7]
                }
              : { x: 0, y: null }
          ]
        }
      ]
    };
    return (
      <>
        <div className="result__main-item">
          <p>{this.props.weather3[0].dt_txt.substr(5, 5)}</p>
          <div className="result__main-item-right">
            <i className={`wi-owm-${findIcon[0]}`} />
            <p className="result__main-item-right-temp">
              {Math.max(...tempMax)}&#176;C / {Math.min(...tempMin)}&#176;C
            </p>
            <i onClick={this.handleSlide} className="fas fa-chevron-down" />
          </div>
        </div>
        <div className="result__main-item-info result__day3">
          <div className="result__main-weather">
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
              {this.props.weather3[0].wind.speed.toFixed()} km/h
            </p>
            <p>
              <i className="fas fa-tint" /> Humidity:{" "}
              {this.props.weather3[0].main.humidity.toFixed()}%
            </p>
            <p>
              <i className="fas fa-compress" /> Pressure:{" "}
              {this.props.weather3[0].main.pressure.toFixed()} hPa
            </p>
            <p>
              <i className="fas fa-cloud" />
              Cloudiness: {this.props.weather3[0].clouds.all}%
            </p>
          </div>
          <div className="result__main-canvas">
            <CanvasJSChart options={options} />
          </div>
        </div>
      </>
    );
  }
}

export default Day3;
