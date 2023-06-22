import { createSlice } from "@reduxjs/toolkit";
import { fetchPlatforms } from "./platformThunks";

const initialState = {
  platforms: [],
  status: "idle",
};

export const platformSlice = createSlice({
  name: "platform",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPlatforms.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPlatforms.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.platforms = action.payload;
    });
    builder.addCase(fetchPlatforms.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default platformSlice.reducer;
