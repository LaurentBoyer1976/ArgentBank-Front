import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import accountReducer from "./accountSlice.js";
import featuresReducer from "./featuresSlice.js";

/**
 * @description Store Redux pour gérer l'état de l'application
 * @info Le store contient les slices pour l'utilisateur, les comptes et les fonctionnalités.
 * @returns {object} - Le store Redux
 */

export const store = configureStore({
  reducer: {
    user: userReducer,
    accounts: accountReducer,
    features: featuresReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});