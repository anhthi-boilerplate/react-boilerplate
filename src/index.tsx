import React from "react";

import { setupListeners } from "@reduxjs/toolkit/query";
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";

import { createStore } from "src/core/store";

import App from "./App";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOMClient.createRoot(document.getElementById("root")!);

const store = createStore();
setupListeners(store.dispatch);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

export type AppDispatch = typeof store.dispatch;
