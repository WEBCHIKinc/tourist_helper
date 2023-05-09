import React from 'react';
import { CityName } from '../city-name/CityName';

export const CityWeather = () => {
  const iconURL = 'http://openweathermap.org/img/wn/04d@2x.png';

  return (
    <div className='city-weather'>
      <CityName />
      <div className='city-weather__box'>
        <img className='weather-icon' src={iconURL} />
        <div className='city-weather__main-info'>
          <h2>19°C</h2>
          <p>
            Partly Cloudy
          </p>
          <p>
            gusts 7m/s
          </p>
        </div>
      </div>
    </div>
  );
};

