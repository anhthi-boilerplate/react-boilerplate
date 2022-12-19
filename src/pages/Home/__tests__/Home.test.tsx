import { screen } from "@testing-library/react";

import { renderWithProvider } from "utils/test/renderWithProvider";

import Home from "../Home";

describe("Home component", () => {
  it("should render welcome message", () => {
    renderWithProvider(<Home />);

    expect(screen.getByTestId("welcome-message")).toBeInTheDocument();
  });
});
