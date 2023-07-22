import React from 'react';

export const CityInfo = ({cityData}) => {

  return (
    <div className="city-info">
      <ul className="city-info-entries">
        <li className="city-info-entry"><span className="city-info-caption">Location</span>{cityData.country}</li>
        <li className="city-info-entry"><span className="city-info-caption">Language</span>{cityData.language}</li>
        <li className="city-info-entry"><span className="city-info-caption">Currency</span>{cityData.currency}</li>
        <li className="city-info-entry"><span className="city-info-caption">Timezone</span>{cityData.timezone}</li>
      </ul>
    </div>
  );
};
