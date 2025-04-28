import { Link } from "react-router-dom";
import bannerImage from "../assets/banner.png";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header
      className="h-24 flex items-center bg-cover bg-center shadow-md"
      style={{
        backgroundImage: `url(${bannerImage})`
      }}
    >
      <div className="px-8 mx-auto flex justify-between items-center w-full max-w-7xl">
        {/* Title */}
        <Link
          to="/"
          className="text-white text-4xl font-bold tracking-wide hover:text-gray-300 transition-colors duration-300 drop-shadow-lg"
        >
          Countries Explorer
        </Link>

        {/* Right Side: Login or Logout */}
        <div className="flex items-center gap-6">
          {user ? (
            <>
              <span className="text-white font-semibold">{user.email}</span>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
