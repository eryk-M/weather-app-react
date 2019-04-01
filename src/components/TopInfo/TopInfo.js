import React from "react";
import "./TopInfo.scss";

const TopInfo = () => {
  const timeh = new Date().getHours();
  const timem = new Date().getMinutes();
  return (
    <div className="top__info">
      <div className="top__info-left">
        <i className="fas fa-circle" />
        <i className="fas fa-circle" />
        <i className="fas fa-circle" />
        <i className="far fa-circle" />
        <p className="top__info-left-play">PLAY</p>
      </div>
      <p className="top__info-hour">
        {timeh}:{timem}
      </p>
      <div className="top__info-right">
        <i className="fas fa-wifi" />
        <p className="top__info-right-battery">75%</p>
        <i className="fas fa-battery-three-quarters" />
      </div>
    </div>
  );
};

export default TopInfo;
