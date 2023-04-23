import weatherReducer from "./weather/index";
import currencyReducer from "./currency/index";
import cityInfoReducer from "./city-info/index";
import { openWeatherMapApi } from "../../services/openWeatherMapService";
import { ipApi } from "../../services/ipApiService";

export const redusers = {
  weather: weatherReducer,
  currency: currencyReducer,
  cityInfo: cityInfoReducer,
  [openWeatherMapApi.reducerPath]: openWeatherMapApi.reducer,
  [ipApi.reducerPath]: ipApi.reducer,
};
