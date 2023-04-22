import React, { useEffect } from "react";
import MainCityClock from "../main-city-components/MainCityClock";
import testMap from "../../../photo/3534563463457457-min.jpg";
import { useSelector } from "react-redux";
import {
  useCityInfoActions,
  useWeatherActions,
} from "../../../hooks/useActions";
import { openWeatherMapApi } from "../../../services/openWeatherMapService";

const CityInfo = () => {
  const { cityName } = useSelector((state) => state.cityInfo);
  const { changeCityName } = useCityInfoActions();
  const { setMainCityWeather } = useWeatherActions();
  const weatherResponse = openWeatherMapApi.useGetWeatherQuery(cityName);

  useEffect(() => {
    setMainCityWeather(weatherResponse.data);
  }, [weatherResponse.data]);

  function handleCityNameChange(e) {
    const cityName = e.target.value;
    changeCityName(cityName);
  }

  return (
    <div className={"card card__main"}>
      <input
        className="input__main input__main-city"
        value={cityName}
        onChange={handleCityNameChange}
      ></input>
      <div className="box__main box__main-currency">$</div>
      <div className="box__main box__main-temperature">20°C</div>
      <div className="box__main box__main-city-map">
        <img src={testMap}></img>
      </div>
      <div className="box__main box__main-weather-description">
        <img src="http://openweathermap.org/img/wn/04d@2x.png"></img>
      </div>
      <MainCityClock />
    </div>
  );
};

export default CityInfo;
