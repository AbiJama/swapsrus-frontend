import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SideBar from "../components/SideBar";

describe("SideBar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText(/Filter By Type/i)).toBeInTheDocument();
    expect(screen.getByText(/Pre-school/i)).toBeInTheDocument();
    expect(screen.getByText(/Indoor/i)).toBeInTheDocument();
    expect(screen.getByText(/Outdoor/i)).toBeInTheDocument();
    expect(screen.getByText(/Books/i)).toBeInTheDocument();

    expect(screen.getByText(/Filter By Age Range/i)).toBeInTheDocument();
    expect(screen.getByText(/0-3/i)).toBeInTheDocument();
    expect(screen.getByText(/3-6/i)).toBeInTheDocument();
    expect(screen.getByText(/6-9/i)).toBeInTheDocument();
    expect(screen.getByText(/9-12/i)).toBeInTheDocument();

    expect(screen.getByText(/Filter By Condition/i)).toBeInTheDocument();
    expect(screen.getByText(/Brand New/i)).toBeInTheDocument();
    expect(screen.getByText(/Like New/i)).toBeInTheDocument();
    expect(screen.getByText(/Good/i)).toBeInTheDocument();
    expect(screen.getByText(/Defected/i)).toBeInTheDocument();

  })
});