import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import CountryCard from "../components/CountryCard";

test("renders CountryCard with country name and region", () => {
  const mockCountry = {
    cca3: "LKA",
    name: { common: "Sri Lanka" },
    flags: { png: "https://flagcdn.com/w320/lk.png" },
    capital: ["Sri Jayawardenepura Kotte"],
    region: "Asia",
    population: 21803000
  };

  render(
    <BrowserRouter>
      <CountryCard country={mockCountry} />
    </BrowserRouter>
  );

  // Check country name
  expect(screen.getByText(/Sri Lanka/i)).toBeInTheDocument();

  // Check separately for Region label and Asia value
  expect(screen.getByText(/Region:/i)).toBeInTheDocument();
  expect(screen.getByText(/Asia/i)).toBeInTheDocument();
});
