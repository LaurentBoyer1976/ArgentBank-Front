import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserProfile } from "../api/services/userAuthentification";

const initialState = {
  firstName: null,
  name: null,
  token: null,
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

// Action asynchrone pour récupérer les données utilisateur
export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchUserProfile();
      return response.body; // Retourne les données utilisateur (firstName, lastName)
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        console.log("User data fetched:", action.payload);
        state.status = "succeeded";
        state.firstName = action.payload.firstName;
        state.name = action.payload.lastName;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setToken, clearUser } = userSlice.actions;
export default userSlice.reducer;