import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cityName: 'Kyiv',
  ipInfo: null
};

export const cityInfoSlice = createSlice({
  name: 'cityInfo',
  initialState,
  reducers: {
    changeCityName: (state, action) => {
      state.cityName = action.payload;
    },
    changeIpInfo: (state, action) => {
      state.ipInfo = action.payload;
    }
  }
});

export default cityInfoSlice.reducer;
