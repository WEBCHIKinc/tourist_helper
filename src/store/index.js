import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { redusers } from "./reducers";
import { openWeatherMapApi } from "../services/openWeatherMapService";
import { ipApi } from "../services/ipApiService";

const rootReducer = combineReducers(redusers);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      openWeatherMapApi.middleware,
      ipApi.middleware
    ),
});
