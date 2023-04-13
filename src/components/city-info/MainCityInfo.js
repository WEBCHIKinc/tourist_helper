import React, { useState } from "react";
import MainCityClock from "../main-city-components/MainCityClock";
import Loader from "../Loader/Loader";

const CityInfo = () => {
  const [isHovered, setIsHovered] = useState(false);
  let hoverTimeout = null;

  function cardMainMouseLeave() {
    hoverTimeout = setTimeout(() => {
      setIsHovered(false);
    }, 3000);
  }

  function cardMainMouseEnter() {
    setIsHovered(true);
    clearTimeout(hoverTimeout);
  }

  return (
    <div
      className={`card__main ${isHovered ? "hovered" : ""}`}
      onMouseEnter={cardMainMouseEnter}
      onMouseLeave={cardMainMouseLeave}
    >
      <input className="input__main-city"></input>
      <div className="box__main-currency">$</div>
      <div className="box__main-temperature">20°C</div>
      <MainCityClock />
    </div>
  );
};

export default CityInfo;
