import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Favorites from "../pages/Favorites";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate
  };
});

describe("Favorites Page", () => {
  test("redirects to login if not authenticated", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <Favorites />
        </AuthProvider>
      </BrowserRouter>
    );

    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });
});
