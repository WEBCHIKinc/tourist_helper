import { createSlice } from '@reduxjs/toolkit';

const initialState = { mainCityWeather: null };

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setMainCityWeather: (state, action) => {
      state.mainCityWeather = action.payload;
    }
  }
});

export default weatherSlice.reducer;
