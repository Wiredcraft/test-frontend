import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Should e", () => {
  const { container } = render(<App />);
  expect(container).toBeTruthy();
});
