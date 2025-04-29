import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAccounts } from "../api/services/api";

const initialState = {
  accounts: [],
  status: "idle", //Info: idle | loading | succeeded | failed
  error: null,
};


/**
 * @description Action asynchrone pour récupérer les comptes utilisateur
 * @param {string} token - Le token d'authentification de l'utilisateur
 */
export const fetchUserAccounts = createAsyncThunk(
  "accounts/fetchUserAccounts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchAccounts(); //Info: Appel de l'API
      return response.body.map((account) => ({
        _id: account._id,
        title: account.title,
        amount: account.amount,
        description: account.description,
      }));
    } catch (error) {
      console.error("Error fetching accounts:", error); //Note: Log des erreurs
      return rejectWithValue(error.message);
    }
  }
);

/**
 * @description Slice Redux pour gérer l'état des comptes utilisateur
 * @returns {object} - Le slice Redux
 */

const accountSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAccounts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserAccounts.fulfilled, (state, action) => {       
        state.status = "succeeded";
        state.accounts = action.payload;
      })
      .addCase(fetchUserAccounts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default accountSlice.reducer;
