import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "sectionSlice",
  initialState: {
    isLoggedIn: false,
    employeeInfo: null,
  },
  reducers: {
    processLogin: (state, action) => {
      // mutation || IMMER
      state.isLoggedIn = true;
      state.employeeInfo = action.payload;
    },
    processLogout: (state, action) => {
      state.isLoggedIn = false;
      state.employeeInfo = null;
    },
  },
});
