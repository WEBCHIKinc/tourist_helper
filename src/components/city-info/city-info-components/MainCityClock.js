import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const MainCityClock = () => {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [timezone, setTimezone] = useState(0);
  const { mainCityWeather } = useSelector((state) => state.weather);
  let lastRenderTime = 0;

  useEffect(() => {
    if (mainCityWeather) {
      setTimezone(mainCityWeather.timezone);
    }
  }, [mainCityWeather]);

  function toPadStart2(time) {
    return time.toString().padStart(2, '0');
  }

  function updateTime(currentTime) {
    if (currentTime - lastRenderTime < 1000) {
      requestAnimationFrame(updateTime);
      return;
    }
    lastRenderTime = currentTime;

    const now = new Date();
    const hours = now.getUTCHours();
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();

    setHours(hours);
    setMinutes(minutes.toString().padStart(2, '0'));
    setSeconds(seconds.toString().padStart(2, '0'));

    requestAnimationFrame(updateTime);
  }

  requestAnimationFrame(updateTime);

  function showHours(hours, timezone) {
    hours = (hours * 3600 + timezone) / 3600;

    if (hours >= 24) {
      hours = hours - 24;
      return toPadStart2(hours);
    }
    return toPadStart2(hours);
  }

  return (
    <div className="box-info__main clock">
      <span>{showHours(hours, timezone)}</span>:
      <span>{minutes}</span>:
      <span>{seconds}</span>
    </div>
  );
};

export default MainCityClock;
