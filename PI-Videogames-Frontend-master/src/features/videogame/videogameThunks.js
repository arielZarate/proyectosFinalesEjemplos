import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVideogames = createAsyncThunk(
  "videogames/fetchVideogames",
  async () => {
    const response = await axios.get("/videogames");
    return response.data;
  }
);

export const fetchVideogameById = createAsyncThunk(
  "videogames/fetchVideogameById",
  async (id) => {
    const response = await axios.get(`/videogames/${id}`);
    return response.data;
  }
);

export const searchVideogames = createAsyncThunk(
  "videogames/searchVideogames",
  async ({ name, genres, platforms }) => {
    let url = `/videogames?name=${name}`;
    if (genres) url += `&genres=${genres}`;
    if (platforms) url += `&platforms=${platforms}`;
    const response = await axios.get(url);
    return response.data;
  }
);

export const addVideogame = createAsyncThunk(
  "videogames/addVideogame",
  async (videogameData) => {
    const response = await axios.post("/videogames", videogameData);
    return response.data;
  }
);

export const deleteVideogame = createAsyncThunk(
  "videogames/deleteVideogame",
  async (id) => {
    const response = await axios.delete(`/videogames/${id}`);
    return response.data;
  }
)