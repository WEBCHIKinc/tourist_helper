import React from 'react';

export const CityNavbar = ({ pageType, setPageType }) => {
  function onButtonClick(e) {
    setPageType(e.target.textContent);
  }

  return (
    <div className="city-nav-bar">
      <button className={`city-nav-button text ${pageType === 'Weather' ? 'hidden' : ''}`} onClick={onButtonClick}>Weather</button>
      <button className={`city-nav-button text ${pageType === 'Converter' ? 'hidden' : ''}`} onClick={onButtonClick}>Converter</button>
      <button className={`city-nav-button text ${pageType === 'Info' ? 'hidden' : ''}`} onClick={onButtonClick}>Info</button>
    </div>
  );
};
