import React, { useState } from "react";

const CityInfo = () => {
  const [isHovered, setIsHovered] = useState(false);
  let hoverTimeout = null;

  function cardMainMouseLeave() {
    hoverTimeout = setTimeout(() => {
      setIsHovered(false);
    }, 2000);
  }

  function cardMainMouseEnter() {
    setIsHovered(true);
    clearTimeout(hoverTimeout);
  }

  return (
    <div
      className={`card card__main ${isHovered ? "hovered" : ""}`}
      onMouseEnter={cardMainMouseEnter}
      onMouseLeave={cardMainMouseLeave}
    ></div>
  );
};

export default CityInfo;
