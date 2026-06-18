import { render, screen } from "@testing-library/react";
import Contact from "../src/components/Contact";
import "@testing-library/jest-dom";

describe("it shoule be tested the contact component", () => {
  test("should be loaded the heading component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("should be loaded the input boxes", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });

  describe("button on contact us", () => {
    it("should be loaded the button in contact", () => {
      render(<Contact />);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
});
