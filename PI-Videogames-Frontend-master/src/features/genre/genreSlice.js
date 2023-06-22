import { createSlice } from "@reduxjs/toolkit";
import { fetchGenres } from "./genreThunks";

const initialState = {
  genres: [],
  status: "idle",
};

export const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.genres = action.payload;
    });
    builder.addCase(fetchGenres.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default genreSlice.reducer;
