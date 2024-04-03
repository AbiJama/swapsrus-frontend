import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const logo = screen.getByAltText("swapzRus icon");
    const aboutLink = screen.getByRole("link", { name: /About Us/i });
    const toysLinks = screen.getAllByRole("link", { name: /Toys/i });
    const addToysLink = screen.getByRole("link", { name: /Add Toys/i });

    expect(asFragment()).toMatchSnapshot();
    expect(logo).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(toysLinks).toHaveLength(2);
    expect(addToysLink).toBeInTheDocument();
  });
});
