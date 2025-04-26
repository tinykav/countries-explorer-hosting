/* eslint-env jest */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CountryCard from "../components/CountryCard";
import { BrowserRouter } from "react-router-dom";

test("renders CountryCard with country name", () => {
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

  expect(screen.getByText("Sri Lanka")).toBeInTheDocument();
  expect(screen.getByText("Region: Asia")).toBeInTheDocument();
});
