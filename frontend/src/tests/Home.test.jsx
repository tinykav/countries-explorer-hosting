import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("renders Home page correctly", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  expect(screen.getByText(/Loading countries/i)).toBeInTheDocument();
});
