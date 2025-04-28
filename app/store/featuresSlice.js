import { createSlice } from "@reduxjs/toolkit";

/**
 * @description Slice Redux pour gérer l'état des fonctionnalités de la page d'accueil
 * @info Le slice contient un tableau de données de fonctionnalités et une action pour les mettre à jour.
 * @returns {object} - Le slice Redux
 */

const featuresSlice = createSlice({
  name: "features",
  initialState: {
    data: [],
  },
  reducers: {
    setFeatures: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setFeatures } = featuresSlice.actions;
export default featuresSlice.reducer;