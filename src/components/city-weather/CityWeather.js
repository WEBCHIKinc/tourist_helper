import React from 'react';
import { openWeatherMapApi } from '../../services/openWeatherMapService';

const LOADING = 'Loading...';

function getCityWeather(name) {
  const { data, isSuccess } = openWeatherMapApi.useGetWeatherQuery(name);

  return isSuccess ? {
    iconCode: data.weather[0].icon,
    temperature: data.main.temp,
    description: data.weather[0].description,
    wind: `gusts ${data.wind.speed}m/s`,
    iconURL: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  } : {};
}
export const CityWeather = ({ cityData }) => {
  const data = getCityWeather(cityData.name);

  return (
    <div className='city-weather'>
      <div className='city-weather__box'>
        <img className='weather-icon' src={data.iconURL || ''} alt={LOADING} />
        <div>
          <h2>{data.temperature || LOADING}</h2>
          <p>
            {data.description || LOADING}
          </p>
          <p>
            {data.wind || LOADING}
          </p>
        </div>
      </div>
    </div>
  );
};
