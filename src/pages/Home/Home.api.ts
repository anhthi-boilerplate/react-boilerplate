import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IPokemon } from "src/model/pokemon";

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.SERVICE_URL }),
  endpoints: (builder) => ({
    getPokemonByIndex: builder.query<IPokemon, number>({
      query: (pokemonIndex) => `pokemon/${pokemonIndex}`,
    }),
  }),
});

export const { useGetPokemonByIndexQuery } = homeApi;
