import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAccounts } from "../api/services/api";

const initialState = {
  accounts: [],
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

// Action asynchrone pour récupérer les comptes utilisateur
export const fetchUserAccounts = createAsyncThunk(
  "accounts/fetchUserAccounts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchAccounts(); // Appel de l'API
      return response.body.map((account) => ({
        id: account._id, // Renomme `_id` en `id`
        title: account.title,
        amount: account.amount,
        description: account.description,
      }));
    } catch (error) {
      console.error("Error fetching accounts:", error); // Log des erreurs
      return rejectWithValue(error.message);
    }
  }
);

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
