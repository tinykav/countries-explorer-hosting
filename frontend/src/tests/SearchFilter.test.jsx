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
        onFilter={mockOnFilter}
        onClear={() => {}}
        searchTerm=""
        region=""
      />
    </BrowserRouter>
  );

  const input = screen.getByPlaceholderText(/search countries/i);
  fireEvent.change(input, { target: { value: "Sri Lanka" } });
  expect(mockOnSearch).toHaveBeenCalledWith("Sri Lanka");

  const select = screen.getByRole("combobox");
  fireEvent.change(select, { target: { value: "Asia" } });
  expect(mockOnFilter).toHaveBeenCalledWith("Asia");
});
