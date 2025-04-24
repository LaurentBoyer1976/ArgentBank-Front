import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import accountReducer from "./accountSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    accounts: accountReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});