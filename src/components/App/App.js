import React, { Component } from "react";
import "./App.scss";
import ResultView from "../ResultView/ResultView";
import FormSearch from "../FormSearch/FormSearch";

const API = "b10af6aec43fd80647fc64535ed23b01";

// GET http://api.openweathermap.org/data/2.5/forecast?q=London,us&APPID=b10af6aec43fd80647fc64535ed23b01

class App extends Component {
  state = {
    city: "",
    country: "",
    value: "",
    today: [],
    tomorrow: [],
    day3: [],
    day4: [],
    day5: [],
    error: false
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const getAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${
      this.state.value
    }&units=metric&appid=${API}`;

    fetch(getAPI)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("something is wrong");
      })
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          city: prevState.value,
          name: data.city.name,
          error: false,
          country: data.city.country,
          today: data.list[0],
          tomorrow: data.list[8],
          day3: data.list[16],
          day4: data.list[24],
          day5: data.list[32]
        }));

        console.log(data);
      })
      .catch(error => {
        this.setState(prevState => ({
          error: true,
          city: prevState.value
        }));
      });
  };

  render() {
    // console.log(this.state.tomorrow);
    return (
      <div className="App">
        <FormSearch
          text={this.state.value}
          change={this.handleChange}
          submit={this.handleSubmit}
        />
        <ResultView weather={this.state} />
      </div>
    );
  }
}

export default App;
