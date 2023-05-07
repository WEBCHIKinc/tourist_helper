import React from 'react';
import { CityName } from '../city-name/CityName';

export const CityInfo = () => {
  return (
    <div className="city-info">
      <CityName />
      <ul style={{ listStyleType: 'none' }}>
        <li>Location: Location</li>
        <li>Language: English</li>
        <li>Currency: USD</li>
        <li>Timezone: GMT+2</li>
      </ul>
    </div>
  );
};
