import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      userId: "",
      userEmail: "",
      organizationId: "",
      profileId: "",
      profileName: "",
      locale: "",
    },
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { set } = userSlice.actions;

export default userSlice.reducer;
