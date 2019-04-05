import React, { Component } from "react";
import Loader from "../../components/Loader/Loader";
import "./Home.scss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getWeather } from "../../actions/fetchWeather.actions";
import { getApi } from "../../actions/api.actions";
import bg from "../../assets/images/bg.png";
import icon from "../../assets/images/icon.png";
import { geolocated } from "react-geolocated";

class Home extends Component {
  state = {
    connect: false,
    latitude: 0,
    longitude: 0,
    value: ""
  };

  componentDidUpdate() {
    if (
      this.props.isGeolocationEnabled &&
      this.state.latitude !== this.props.coords.latitude
    ) {
      this.setState({
        latitude: this.props.coords.latitude,
        longitude: this.props.coords.longitude
      });
      if (
        this.state.connect === false &&
        this.props.coords.latitute !== this.state.latitude &&
        this.props.isGeolocationAvailable &&
        this.props.isGeolocationEnabled
      ) {
        this.props.getWeather(
          this.props.api,
          this.props.coords.latitude,
          this.props.coords.longitude
        );
        this.setState({
          connect: true
        });
      }
    }
  }
  handleFormSubmit = e => {
    e.preventDefault();
    this.setState({});
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const formatter = new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    return (
      <div className="home" style={{ backgroundImage: `url(${bg})` }}>
        <p className="home__day">{formatter.format(new Date())}</p>
        {!this.props.isGeolocationAvailable ? (
          <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
          <div className="home__geolocation">Geolocation is not enabled</div>
        ) : this.props.coords ? (
          this.props.weather.isLoading ? (
            <Loader />
          ) : (
            <div className="home__info">
              <h1>{this.props.weather.name}</h1>
              <i className="fas fa-map-marker-alt" />
              <p>{this.props.weather.main.temp.toFixed()}&#176;C</p>
              <i
                className={`wi-owm-${this.props.weather.weather[0].id} ${
                  this.props.weather.weather[0].id === 800 ? "sunAnim" : null
                }
                `}
              />
            </div>
          )
        ) : (
          <div className="home__geolocation">
            Getting the location data&hellip;{" "}
          </div>
        )}

        <form onSubmit={this.props.search} className="home__form">
          <input
            type="text"
            value={this.props.value}
            placeholder="Search weather..."
            onChange={this.props.change}
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

function mapStateToProps(state) {
  return {
    api: state.api.api,
    weather: state.weather,
    value: state.value
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getApi: bindActionCreators(getApi, dispatch),
    getWeather: bindActionCreators(getWeather, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  geolocated({
    positionOptions: {
      enableHighAccuracy: false
    },
    userDecisionTimeout: 5000
  })(Home)
);
