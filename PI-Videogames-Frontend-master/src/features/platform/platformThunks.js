
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPlatforms = createAsyncThunk(
  "platforms/fetchPlatforms",
  async () => {
    const response = await axios.get("/platforms");
    return response.data;
  }
);