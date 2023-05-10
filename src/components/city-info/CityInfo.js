import React from 'react';
import { CityName } from '../city-name/CityName';
import { cityService } from '../../services/cityService';

export const CityInfo = () => {

  console.log(cityService.getCities());

  return (
    <div className="city-info">
      <CityName />
      <ul className="city-info-entries">
        <li className="city-info-entry"><span className="city-info-caption">Location</span>Kyiv</li>
        <li className="city-info-entry"><span className="city-info-caption">Language</span>English</li>
        <li className="city-info-entry"><span className="city-info-caption">Currency</span>USD</li>
        <li className="city-info-entry"><span className="city-info-caption">Timezone</span>GMT+2</li>
      </ul>
    </div>
  );
};
