import React, { useEffect, useState } from "react";
import MainCityClock from "../main-city-components/MainCityClock";
import testMap from "../../../photo/3534563463457457-min.jpg";
import { useSelector } from "react-redux";
import {
  useCityInfoActions,
  useWeatherActions,
} from "../../../hooks/useActions";
import { openWeatherMapApi } from "../../../services/openWeatherMapService";
import { ipApi } from "../../../services/ipApiService";

const CityInfo = () => {
  const { cityName } = useSelector((state) => state.cityInfo);
  const { mainCityWeather } = useSelector((state) => state.weather);
  const { changeCityName, changeIpInfo } = useCityInfoActions();
  const { setMainCityWeather } = useWeatherActions();
  const weatherResponse = openWeatherMapApi.useGetWeatherQuery(cityName);
  const ipResponse = ipApi.useGetIpInfoQuery();
  const [mainTemp, setMainTemp] = useState(0);
  const [mainIconCode, setMainIconCode] = useState("04d");

  useEffect(() => {
    try {
      setMainTemp(Math.trunc(mainCityWeather.main.temp));
      setMainIconCode(mainCityWeather.weather[0].icon);
    } catch (error) {
      // console.error(error);
    }
  }, [mainCityWeather]);

  useEffect(() => {
    setMainCityWeather(weatherResponse.data);
  }, [weatherResponse.data]);

  useEffect(() => {
    changeIpInfo(ipResponse.data);
  }, [ipResponse.data]);

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
      <div className="box__main box__main-temperature">{`${mainTemp}°C`}</div>
      <div className="box__main box__main-city-map">
        <img src={testMap} />
      </div>
      <div className="box__main box__main-weather-description">
        <img src={`http://openweathermap.org/img/wn/${mainIconCode}@2x.png`} />
      </div>
      <MainCityClock />
    </div>
  );
};

export default CityInfo;
