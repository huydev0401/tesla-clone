import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/car/carSlice";
import sidebarReducer from "../features/sidebar/sidebarSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
    sidebar: sidebarReducer,
  },
});
