import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";

import { homeApi } from "src/pages/Home/Home.api";
import homeReducer from "src/pages/Home/Home.slice";

const rootReducer = combineReducers({
  home: homeReducer,
  [homeApi.reducerPath]: homeApi.reducer,
});

export const createStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(homeApi.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
