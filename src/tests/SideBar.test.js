import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SideBar from "../components/SideBar";

describe("SideBar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText(/Filter By Type/i)).toBeInTheDocument();
    expect(screen.getByText(/Clear Filter/i)).toBeInTheDocument();
    expect(screen.getByText(/AgeRange Ascending/i)).toBeInTheDocument();
    expect(screen.getByText(/AgeRange Descending/i)).toBeInTheDocument();
    expect(screen.getByText(/Clear Sort/i)).toBeInTheDocument();
  });
});
