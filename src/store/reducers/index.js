import weatherReducer from "./weather/index";
import currencyReducer from "./currency/index";
import cityInfoReducer from "./city-info/index";

export const redusers = {
  weather: weatherReducer,
  currency: currencyReducer,
  cityInfo: cityInfoReducer,
};
