import { configureStore } from "@reduxjs/toolkit";
import videogameReducer from "../features/videogame/videogameSlice";
import genreReducer from "../features/genre/genreSlice";
import platformReducer from "../features/platform/platformSlice";

export const store = configureStore({
  reducer: {
    videogame: videogameReducer,
    genre: genreReducer,
    platform: platformReducer,
  },
});
