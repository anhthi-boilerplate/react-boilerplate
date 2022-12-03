import { render, screen } from "@testing-library/react";
import Home from "../Home";

describe("Home component", () => {
  it("should render welcome message", () => {
    render(<Home />);

    expect(screen.getByTestId("welcome-message")).toBeInTheDocument();
  });
});
