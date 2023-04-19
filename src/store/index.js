import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { redusers } from "./reducers";
import { openWeatherMapApi } from "../services/openWeatherMapService";

const rootReducer = combineReducers(redusers);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(openWeatherMapApi.middleware),
});
