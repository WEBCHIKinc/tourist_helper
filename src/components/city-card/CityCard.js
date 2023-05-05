import React from 'react';
import { CityPhoto } from '../city-photo/CityPhoto';
import { CityInfo } from '../city-info/CityInfo';

export const CityCard = () => {
  return (
    <div className="city-card">
      <CityPhoto />
      <CityInfo/>
    </div>
  );
};
