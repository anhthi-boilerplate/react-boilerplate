import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.SERVICE_URL }),
  endpoints: (builder) => ({
    getPokemonByIndex: builder.query<unknown, number>({
      query: (pokemonIndex) => `pokemon/${pokemonIndex}`,
    }),
  }),
});

export const { useGetPokemonByIndexQuery } = homeApi;
