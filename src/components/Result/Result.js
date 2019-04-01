import React, { Component } from "react";
import "./Result.scss";
import Loader from "../../components/Loader/Loader";

import Day1 from "./Day1/Day1";

// class Result extends Component {
//   state = {
//     weather: null,
//     cityName: "",
//     country: ""
//   };

//   componentDidUpdate() {
//     if (this.props.weather === null) {
//       this.setState({
//         weather: this.props.weather,
//         cityName: this.props.cityName,
//         country: this.props.country
//       });
//       console.log(this.props);
//       console.log(this.state);
//     }
//   }
//   render() {
//     // console.log(this.state);
//     return <div />;
//   }
// }

const Result = props => {
  const { cityName, country, isLoading, day1 } = props.weather;
  console.log(props);
  return (
    <div className="result">
      <h1>{isLoading ? <Loader /> : `${cityName}, ${country}`}</h1>
    </div>
  );
};

export default Result;
