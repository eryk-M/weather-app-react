import React, { Component } from "react";
import Loader from "../../components/Loader/Loader";
import "./Home.scss";
import bg from "../../assets/images/bg.png";
import icon from "../../assets/images/icon.png";
import { geolocated } from "react-geolocated";
const API = "0b62cd0fa6e7ff2dc7f77011677bf785";

class Home extends Component {
  state = {
    connect: false,
    weather: [],
    temp: 0,
    icon: null,
    description: "",
    latitude: 0,
    longitude: 0,
    value: "",
    isLoading: false
  };
  componentDidMount() {
    // this.setState({
    //   isLoading: true
    // });
  }
  componentWillMount() {
    this.setState({
      isLoading: true
    });
  }

  componentDidUpdate() {
    if (this.state.latitude !== this.props.coords.latitude) {
      this.setState({
        latitude: this.props.coords.latitude,
        longitude: this.props.coords.longitude
      });
    }
    if (
      this.state.connect === false &&
      this.props.coords.latitute !== this.state.latitude &&
      this.props.isGeolocationAvailable &&
      this.props.isGeolocationEnabled
    ) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          this.props.coords.latitude
        }&lon=${this.props.coords.longitude}&appid=${API}&units=metric`
      )
        .then(res => {
          if (res.ok) {
            return res;
          } else {
            alert(res.statusText);
          }
        })
        .then(res => res.json())
        .then(res => {
          this.setState({
            weather: res,
            connect: true,
            temp: res.main.temp,
            description: res.weather[0].description,
            icon: res.weather[0].id,
            isLoading: false
          });
        })
        .catch(err => console.log(err));
    }
  }

  handleSubmit = e => {
    e.preventDefault();
  };
  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    console.log(this.state.isLoading);
    return (
      <div className="home" style={{ backgroundImage: `url(${bg})` }}>
        {!this.props.isGeolocationAvailable ? (
          <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
          <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
          this.state.isLoading ? (
            <Loader />
          ) : (
            <div className="home__info">
              <h1>{this.state.weather.name}</h1>
              <p>{this.state.temp}&#176;C</p>
              <i className={`wi-owm-${this.state.icon}`} />
            </div>
          )
        ) : (
          <div>Getting the location data&hellip; </div>
        )}

        <form onSubmit={this.handleSubmit} className="home__form">
          <input
            type="text"
            value={this.state.value}
            placeholder="Search weather..."
            onChange={this.handleInputChange}
          />
          <i className="fas fa-search" />
        </form>
        <div className="home__icon" onClick={this.props.search}>
          <img src={icon} alt="" />
          <p className="home__icon-para">Weather app</p>
        </div>
      </div>
    );
  }
}
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Home);
