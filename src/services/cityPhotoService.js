import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseParams = {
  // eslint-disable-next-line camelcase
  client_id: '46lB2Z8GaaoCqUZCkLms9HynR095eL3S5XzWwH0kCIg',
  orientation: 'landscape',
  width: 1080,
  height: 720
};

export const cityPhotoAPI = createApi({
  reducerPath: 'cityPhotoAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.unsplash.com'
  }),
  endpoints: (builder) => ({
    getPhoto: builder.query({
      query: (city) => ({
        url: `/photos/random?query=${city}`,
        params: baseParams
      })
    })
  })
});
