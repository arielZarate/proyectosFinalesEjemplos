import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGenres = createAsyncThunk(
  "genres/fetchGenres",
  async () => {
    const response = await axios.get("/genres");
    return response.data;
  }
);