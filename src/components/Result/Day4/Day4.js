import React, { Component } from "react";
import { SlideDown } from "react-slidedown";
import CanvasJSReact from "../../../assets/canvasjs.react";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Day4 extends Component {
  state = {
    open: false
  };
  handleSlide = e => {
    this.setState({
      open: !this.state.open
    });
    e.target.classList.toggle("rotate");
  };

  render() {
    const tempMin = this.props.weather4.map(
      min => +min.main.temp_min.toFixed()
    );
    const tempMax = this.props.weather4.map(
      max => +max.main.temp_max.toFixed()
    );
    const icon = this.props.weather4.map(icon => icon.weather[0]);
    const findIcon = icon.map(fi => fi.id);
    const temps = this.props.weather4.map(temp => +temp.main.temp.toFixed());
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
            this.props.weather4[0]
              ? {
                  x: this.props.weather4[0].dt_txt.substr(11, 2) * 1,
                  y: temps[0]
                }
              : { x: 0, y: null },
            this.props.weather4[1]
              ? {
                  x: this.props.weather4[1].dt_txt.substr(11, 2) * 1,
                  y: temps[1]
                }
              : { x: 0, y: null },
            this.props.weather4[2]
              ? {
                  x: this.props.weather4[2].dt_txt.substr(11, 2) * 1,
                  y: temps[2]
                }
              : { x: 0, y: null },
            this.props.weather4[3]
              ? {
                  x: this.props.weather4[3].dt_txt.substr(11, 2) * 1,
                  y: temps[3]
                }
              : { x: 0, y: null },
            this.props.weather4[4]
              ? {
                  x: this.props.weather4[4].dt_txt.substr(11, 2) * 1,
                  y: temps[4]
                }
              : { x: 0, y: null },
            this.props.weather4[5]
              ? {
                  x: this.props.weather4[5].dt_txt.substr(11, 2) * 1,
                  y: temps[5]
                }
              : { x: 0, y: null },
            this.props.weather4[6]
              ? {
                  x: this.props.weather4[6].dt_txt.substr(11, 2) * 1,
                  y: temps[6]
                }
              : { x: 0, y: null },
            this.props.weather4[7]
              ? {
                  x: this.props.weather4[7].dt_txt.substr(11, 2) * 1,
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
          <p>{this.props.weather4[0].dt_txt.substr(5, 5)}</p>
          <div className="result__main-item-right">
            <i className={`wi-owm-${findIcon[0]}`} />
            <p className="result__main-item-right-temp">
              {Math.max(...tempMax)}&#176;C / {Math.min(...tempMin)}&#176;C
            </p>
            <i onClick={this.handleSlide} className="fas fa-chevron-down" />
          </div>
        </div>
        <SlideDown className={"my-dropdown-slidedown"}>
          {this.state.open ? (
            <div className="result__main-item-info">
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
                  {this.props.weather4[0].wind.speed.toFixed()} m/s
                </p>
                <p>
                  <i className="fas fa-tint" /> Humidity:{" "}
                  {this.props.weather4[0].main.humidity.toFixed()}%
                </p>
                <p>
                  <i className="fas fa-compress" /> Pressure:{" "}
                  {this.props.weather4[0].main.pressure.toFixed()} hPa
                </p>
                <p>
                  <i className="fas fa-cloud" />
                  Cloudiness: {this.props.weather4[0].clouds.all}%
                </p>
              </div>
              <div className="result__main-canvas">
                <CanvasJSChart options={options} />
              </div>
            </div>
          ) : null}
        </SlideDown>
      </>
    );
  }
}

export default Day4;
