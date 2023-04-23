import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseParams = {};

export const ipApi = createApi({
  reducerPath: "ipApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ipapi.co/",
  }),
  endpoints: (builder) => ({
    getIpInfo: builder.query({
      query: () => ({
        url: "/json/",
        params: baseParams,
      }),
    }),
  }),
});
