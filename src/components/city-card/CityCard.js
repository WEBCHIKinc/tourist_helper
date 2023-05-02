import React from "react";
import { CityPhoto } from "../city-photo/CityPhoto";
import { CityInfo } from "../city-info/CityInfo";
import { MainCityNavbar } from "../city-navbar/CityNavbar";

export const CityCard = () => {
  return (
    <div className="city-card">
      <CityPhoto />
      <CityInfo />
      <MainCityNavbar />
    </div>
  );
};
