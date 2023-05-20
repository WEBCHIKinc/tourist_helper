import React from 'react';
import { openWeatherMapApi } from '../../services/openWeatherMapService';

export const CityWeather = ({ cityData }) => {
  const { data, isSuccess } = openWeatherMapApi.useGetWeatherQuery(cityData.name);
  let iconURL = '';
  let temperature = '';
  let description = '';
  let wind = '';

  if (isSuccess) {
    const iconCode = data.weather[0].icon;
    temperature = data.main.temp;
    description = data.weather[0].description;
    wind = `gusts ${data.wind.speed}m/s`;
    iconURL = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }

  return (
    <div className='city-weather'>
      <div className='city-weather__box'>
        <img className='weather-icon' src={iconURL} alt='icon' />
        <div className='city-weather__main-info'>
          <h2>{temperature}</h2>
          <p>
            {description}
          </p>
          <p>
            {wind}
          </p>
        </div>
      </div>
    </div>
  );
};

