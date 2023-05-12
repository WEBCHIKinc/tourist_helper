import React, { useEffect, useState } from 'react';

export const CityNavbar = ({ pageType, setPageType }) => {
  const [buttons, setButtons] = useState(['Weather', 'Converter']);

  useEffect(() => {
    if (pageType === 'Converter') {
      setButtons(['Weather', 'Info']);
    } else if (pageType === 'Weather') {
      setButtons(['Converter', 'Info']);
    } else {
      setButtons(['Weather', 'Converter']);
    }
  }, [pageType]);

  function onButtonClick(e) {
    setPageType(e.target.textContent);
  }

  return (
    <div className="city-nav-bar">
      <button className="city-nav-button" onClick={onButtonClick}>{buttons[0]}</button>
      <button className="city-nav-button" onClick={onButtonClick}>{buttons[1]}</button>
    </div>
  );
};
