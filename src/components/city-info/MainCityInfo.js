import React, { useState } from "react";
import MainCityClock from "../main-city-components/MainCityClock";
import testMap from "../../photo/3534563463457457-min.jpg";
import { useSelector } from "react-redux";

const CityInfo = () => {
  const { isHovered } = useSelector((state) => state.cityInfo);

  return (
    <div className={`card__main ${isHovered ? "hovered" : ""}`}>
      <input className="input__main-city" placeholder="Kyiv"></input>
      <div className="box__main-currency">$</div>
      <div className="box__main-temperature">20°C</div>
      <div className="box__main-city-map">
        <img src={testMap}></img>
      </div>
      <div className="box__main-weather-description">
        <img src="http://openweathermap.org/img/wn/04d@2x.png"></img>
      </div>
      <MainCityClock />
    </div>
  );
};

export default CityInfo;
