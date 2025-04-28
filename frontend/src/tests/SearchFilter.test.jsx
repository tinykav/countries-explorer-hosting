import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchFilter from "../components/SearchFilter";

test("calls onSearch and onFilter when typing and selecting", () => {
  const mockOnSearch = vi.fn();
  const mockOnFilter = vi.fn();

  render(
    <BrowserRouter>
      <SearchFilter
        onSearch={mockOnSearch}
        onFilterRegion={mockOnFilter}
        onFilterLanguage={() => {}}
        onClear={() => {}}
        searchTerm=""
        region=""
        language=""
      />
    </BrowserRouter>
  );

  const input = screen.getByPlaceholderText(/search countries/i);
  fireEvent.change(input, { target: { value: "Sri Lanka" } });
  expect(mockOnSearch).toHaveBeenCalledWith("Sri Lanka");

  const selects = screen.getAllByRole("combobox");
  fireEvent.change(selects[0], { target: { value: "Asia" } });
  expect(mockOnFilter).toHaveBeenCalledWith("Asia");
});
