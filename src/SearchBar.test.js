import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("SearchBar Testing", () => {
  test("render the placeholder text", () => {
    const { getByText } = render(<App />);
    const element = getByText("Search...");
    expect(element).toBeInTheDocument;
  });
});
