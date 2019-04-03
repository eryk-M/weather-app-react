import React, { Component } from "react";
import "../../css/weather-icons.min.css";
import "./App.scss";
import "../../styles/main.scss";
import TopInfo from "../TopInfo/TopInfo";
import Menu from "../Menu/Menu";
import Home from "../../Pages/Home/Home";
import Search from "../../Pages/Search/Search";
class App extends Component {
  state = {
    search: false,
    home: true
  };
  handleSearch = () => {
    this.setState({
      search: true,
      home: false
    });
  };

  handleHome = () => {
    this.setState({
      search: false,
      home: true
    });
  };
  render() {
    return (
      <div className="App">
        <TopInfo />
        {this.state.search ? <Search /> : null}
        {this.state.home ? <Home search={this.handleSearch} /> : null}
        <Menu
          home={this.handleHome}
          search={this.handleSearch}
          width={this.state}
        />
      </div>
    );
  }
}

export default App;
