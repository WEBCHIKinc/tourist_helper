import { createSlice } from '@reduxjs/toolkit';

const initialState = { weather: {} };

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.weather = {...state.weather, ...action.payload };
    }
  }
});

export default weatherSlice.reducer;
