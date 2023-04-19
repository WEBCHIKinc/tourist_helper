import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseParams = {
  units: "metric",
  appid: "d91a703a0a98bfa02281b20354b6c152",
};

export const openWeatherMapApi = createApi({
  reducerPath: "openWeatherMapApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api.openweathermap.org/data/2.5/",
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (cityName) => ({
        url: `weather?q=${cityName}`,
        params: baseParams,
      }),
    }),
  }),
});
