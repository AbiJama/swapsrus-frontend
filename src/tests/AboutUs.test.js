import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AboutUs from "../components/AboutUs";

describe("AboutUs", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <AboutUs />
      </MemoryRouter>
    );

    const allLinks = screen.getAllByRole("link");

    const browseToysLink = allLinks.find((link) =>
      link.querySelector('img[alt="logo with browse toys text"]')
    );
    const uploadToysLink = allLinks.find((link) =>
      link.querySelector('img[alt="logo with upload toys text"]')
    );
    expect(asFragment()).toMatchSnapshot();
    expect(browseToysLink).toBeInTheDocument();
    expect(browseToysLink).toHaveAttribute("href", "/toys");

    expect(uploadToysLink).toBeInTheDocument();
    expect(uploadToysLink).toHaveAttribute("href", "/add-toys");
  });
});
