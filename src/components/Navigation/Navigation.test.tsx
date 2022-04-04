import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

test("Should render 3 icon buttons in navigation", async () => {
  render(<Navigation />);
  expect(await screen.findAllByRole("button")).toHaveLength(3);
});
