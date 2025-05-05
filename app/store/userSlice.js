import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserProfile } from "../api/services/userAuthentification";

const initialState = {
  firstName: null,
  name: null,
  token: null,
  status: "idle", //Info: idle | loading | succeeded | failed
  error: null,
};

/**
 * @description Thunk pour récupérer les données utilisateur
 * @returns {Promise} - Une promesse qui résout les données utilisateur
 */

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchUserProfile();
      return response.body; //Note: Retourne les données utilisateur (firstName, lastName)
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/** 
 * @description Slice Redux pour gérer l'état de l'utilisateur
 * @info Le slice contient les informations de l'utilisateur, le token et l'état de la requête.
 * @returns {object} - Le slice Redux
 */

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearUser: (state) => {
      state.firstName = null;
      state.name = null;
      state.token = null;
      state.status = "idle";
      state.error = null;
    },
    openEditModal: (state) => {
      state.isEditing = true; //Info: Ouvre la modale d'édition
    },
    closeEditModal: (state) => {
      state.isEditing = false; //Info: Ferme la modale d'édition
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {       
        state.status = "succeeded";
        state.firstName = action.payload.firstName;
        state.name = action.payload.lastName; //Info:Vérifiez que `lastName` est bien défini
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setToken, clearUser, openEditModal, closeEditModal } = userSlice.actions;
export default userSlice.reducer;