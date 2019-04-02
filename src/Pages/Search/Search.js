import React, { Component } from "react";
import "./Search.scss";
import Result from "../../components/Result/Result";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getForecast } from "../../actions/fetchForecast.actions";
import Loader from "../../components/Loader/Loader";

class Search extends Component {
  state = {
    value: "",
    cityName: "",
    country: "",
    weather: [],
    isLoading: false,
    latitude: 0,
    longitude: 0
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.getForecast(this.props.api, this.state.value);
    this.setState({
      value: ""
    });
  };
  componentDidMount() {}

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    // const date = new Date().toISOString();
    // const dateFixed = date.substr(0, 10);
    // const filteredDates = this.props.forecast.list.filter(
    //   filter => filter.dt_txt.substr(0, 10) === dateFixed
    // );
    // console.log(filteredDates);
    console.log(this.props);
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit} className="home__form search__form">
          <input
            type="text"
            value={this.state.value}
            placeholder="Search weather..."
            onChange={this.handleInputChange}
          />
          <i className="fas fa-search" />
        </form>
        {this.props.forecast.isLoading ? (
          <Loader />
        ) : this.props.forecast.search ? (
          <Result weather={this.props} />
        ) : null}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    api: state.api.api,
    forecast: state.forecast
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getForecast: bindActionCreators(getForecast, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
