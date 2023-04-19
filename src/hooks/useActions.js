import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { cityInfoSlice } from "../store/reducers/city-info";
import { weatherSlice } from "../store/reducers/weather";

export const useCityInfoActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(cityInfoSlice.actions, dispatch);
};
export const useWeatherActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(weatherSlice.actions, dispatch);
};
