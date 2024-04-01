import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddToys from "../components/AddToys";

describe("AddToys", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <AddToys />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
    const toyTitleInput = screen.getByLabelText(/Toy Title/i);

    expect(toyTitleInput).toBeInTheDocument();
  });
});
