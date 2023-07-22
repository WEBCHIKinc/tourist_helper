import React from 'react';
import NewYork from '../../photo/photo-1434828927397-62ea053f7a35.jpg';
import { cityPhotoAPI } from '../../services/cityPhotoService';

function getPhoto(city) {
  const {data, isSuccess} = cityPhotoAPI.useGetPhotoQuery(city);
  return isSuccess ? data.urls.regular : NewYork;
}

export const CityPhoto = ({cityName}) => {
  const photo = getPhoto(cityName);

  return (
    <img className="city-photo" src={photo} alt='Loading...' />
  );
};
