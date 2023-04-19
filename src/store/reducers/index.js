import weatherReducer from "./weather/index";
import currencyReducer from "./currency/index";
import cityInfoReducer from "./city-info/index";
import { openWeatherMapApi } from "../../services/openWeatherMapService";

export const redusers = {
  weather: weatherReducer,
  currency: currencyReducer,
  cityInfo: cityInfoReducer,
  [openWeatherMapApi.reducerPath]: openWeatherMapApi.reducer,
};
