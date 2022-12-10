import { createSlice } from "@reduxjs/toolkit";
import { HomeState } from "./Home.interfaces";

const initialState: HomeState = {
  pokemonIndex: 1,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setPokemonIndex: (state, { payload }) => {
      state.pokemonIndex = payload;
    },
  },
});

export const { setPokemonIndex } = homeSlice.actions;

export default homeSlice.reducer;
