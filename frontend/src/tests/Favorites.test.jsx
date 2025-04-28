import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Favorites from "../pages/Favorites";

describe("Favorites Page", () => {
  test("shows 'No favorites yet' when no favorites exist", () => {
    // Clear localStorage before test
    localStorage.clear();

    render(
      <BrowserRouter>
        <Favorites />
      </BrowserRouter>
    );

    expect(screen.getByText(/no favorites yet/i)).toBeInTheDocument();
  });
});
