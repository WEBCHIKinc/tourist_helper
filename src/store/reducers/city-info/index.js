import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cityName: "Kyiv",
};

export const cityInfoSlice = createSlice({
  name: "cityInfo",
  initialState,
  reducers: {
    changeCityName: (state, action) => {
      state.cityName = action.payload;
    },
  },
});

export default cityInfoSlice.reducer;
