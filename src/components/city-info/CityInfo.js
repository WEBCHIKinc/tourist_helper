import React from 'react';
import { CityName } from '../city-name/CityName';

export const CityInfo = () => {
  return (
    <div className="city-info">
      <CityName />
      <div>
        <p>
          Location: Location
        </p>
        <p>
          Language: English
        </p>
        <p>
          Currency: USD
        </p>
        <p>
          Timezone: GMT+2
        </p>
      </div>
    </div>
  );
};
