import Hello from "./Hello";
import { render, screen } from "@testing-library/react";

it("Renders Hello World", () => {
  render(<Hello />);
  expect(screen.getByText("Hello").textContent).toBe("Hello");
});
