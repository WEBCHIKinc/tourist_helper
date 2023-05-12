import React, { useState } from 'react';
import { CityPhoto } from '../city-photo/CityPhoto';
import { CityInfo } from '../city-info/CityInfo';
import { CityNavbar } from '../city-navbar/CityNavbar';
import { CityWeather } from '../city-weather/CityWeather';
import { CityCurrencyConverter } from '../city-currency-converter/CityCurrencyConverter';

export const CityCard = () => {
  const [pageType, setPageType] = useState('Info');

  return (
    <div className="city-card">
      <CityPhoto />
      {pageType === 'Info' && <CityInfo />}
      {pageType === 'Weather' && <CityWeather />}
      {pageType === 'Converter' && <CityCurrencyConverter />}
      <CityNavbar pageType={pageType} setPageType={setPageType} />
    </div>
  );
};
