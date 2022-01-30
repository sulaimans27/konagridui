import { createSlice } from "@reduxjs/toolkit";

// sets userInfo state
export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    userInfo: null,
  },
  reducers: {
    setUserInfo: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
