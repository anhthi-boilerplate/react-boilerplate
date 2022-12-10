import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "core/store";
import { HomeState } from "./Home.interfaces";

const initialState: HomeState = {
  pokemonIndex: 1,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setPokemonIndex: (state: RootState, action: PayloadAction<number>) => {
      state.pokemonIndex = action.payload;
    },
  },
});

export const { setPokemonIndex } = homeSlice.actions;

export default homeSlice.reducer;
