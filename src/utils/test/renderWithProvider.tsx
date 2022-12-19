import { ReactNode } from "react";

import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { createStore } from "core/store";

export const renderWithProvider = (component: ReactNode) => {
  return render(<Provider store={createStore()}>{component}</Provider>);
};
