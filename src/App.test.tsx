import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Should render the app without error", () => {
  const { container } = render(<App />);
  expect(container).toBeTruthy();
});
