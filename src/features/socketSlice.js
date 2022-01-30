import { createSlice } from "@reduxjs/toolkit";

// sets socket state
export const socketSlice = createSlice({
  name: "socket",
  initialState: {
    socket: null,
  },
  reducers: {
    setSocket: (state, { payload }) => {
      state.socket = payload;
    },
  },
});

export const { setSocket } = socketSlice.actions;

export default socketSlice.reducer;
