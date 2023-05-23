import React, { useState } from 'react';
import { CityPhoto } from '../city-photo/CityPhoto';
import { CityInfo } from '../city-info/CityInfo';
import { CityNavbar } from '../city-navbar/CityNavbar';
import { CityWeather } from '../city-weather/CityWeather';
import { CityCurrencyConverter } from '../city-currency-converter/CityCurrencyConverter';
import { CityName } from '../city-name/CityName';

export const CityCard = () => {
  const [pageType, setPageType] = useState('Info');
  const cityData = {
    'id': 1,
    'name': 'New York City',
    'currency': 'USD',
    'timezone': 'GMT-4',
    'country': 'United States',
    'language': 'English'
  };

  return (
    <div className="city-card">
      <CityPhoto />
      <CityName cityName={cityData.name} />
      {pageType === 'Info' && <CityInfo cityData={cityData} />}
      {pageType === 'Weather' && <CityWeather cityData={cityData} />}
      {pageType === 'Converter' && <CityCurrencyConverter currency={cityData.currency} />}
      <CityNavbar pageType={pageType} setPageType={setPageType} />
    </div>
  );
};
