import React from "react";
import "./CityName.scss";

const CityName = props => {
  const { name, country } = props;

  return (
    <h1 className="result__name">
      {`${name}, ${country}`}
      <img
        className="flag"
        src={`https://www.countryflags.io/${country}/shiny/64.png`}
        alt="Flaga"
      />
    </h1>
  );
};

export default CityName;
