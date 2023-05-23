import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseParams = {};

export const exchangeRateApi = createApi({
  reducerPath: 'exchangeRateApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://v6.exchangerate-api.com'
  }),
  endpoints: (builder) => ({
    getCurrencyData: builder.query({
      query: (currency) => ({
        url: `/v6/36921f13e8cabe1887bfe987/latest/${currency}`,
        params: baseParams
      })
    })
  })
});
