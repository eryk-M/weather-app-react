import React, { Component } from "react";
import "./Search.scss";
import Result from "../../components/Result/Result";

const API = "b10af6aec43fd80647fc64535ed23b01";
class Search extends Component {
  state = {
    value: "",
    cityName: "",
    country: "",
    weather: [],
    isLoading: false
  };
  handleSubmit = e => {
    e.preventDefault();

    const getAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${
      this.state.value
    }&units=metric&appid=${API}`;
    this.setState({
      isLoading: true
    });
    fetch(getAPI)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Nie udało się");
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          cityName: data.city.name,
          country: data.city.country,
          value: "",
          isLoading: false
        });
        console.log(data);
        // console.log(this.state.cityName);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    console.log(this.state.cityName);
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
        <Result weather={this.state} />
      </div>
    );
  }
}

export default Search;
