import React from 'react';
import { CityPhoto } from '../city-photo/CityPhoto';
import { CityInfo } from '../city-info/CityInfo';
import { CityNavbar } from '../city-navbar/CityNavbar';
import { CityWeather } from '../city-weather/CityWeather';

export const CityCard = () => {
  return (
    <div className="city-card">
      <CityPhoto />
      {/* <CityInfo/> */}
      <CityWeather />
      <CityNavbar />
    </div>
  );
};
