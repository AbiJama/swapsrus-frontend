import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AboutUs from "../components/AboutUs";

describe("AboutUs component", () => {
  it("should navigate to /toys when browse toys button is clicked", () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <AboutUs />
      </MemoryRouter>
    );

    const browseToysButton = getByAltText("logo with browse toys text");

    fireEvent.click(browseToysButton);

    expect(window.location.pathname).toBe("/toys");
  });

  it("should navigate to /add-toys when upload toys button is clicked", () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <AboutUs />
      </MemoryRouter>
    );

    const uploadToysButton = getByAltText("logo with upload toys text");

    fireEvent.click(uploadToysButton);

    expect(window.location.pathname).toBe("/add-toys");
  });
});
