import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHovered: false,
};

export const cityInfoSlice = createSlice({
  name: "cityInfo",
  initialState,
  reducers: {
    setIsHovered: (state, action) => {
      state.isHovered = action.payload;
    },
  },
});

export const { setIsHovered } = cityInfoSlice.actions;
export default cityInfoSlice.reducer;
