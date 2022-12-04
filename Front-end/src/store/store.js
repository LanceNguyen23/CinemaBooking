import { configureStore } from "@reduxjs/toolkit";
import sectionSlice from "./slices/sectionSlice";

const store = configureStore({
  reducer: {
    section: sectionSlice.reducer,
  },
});

export default store;
