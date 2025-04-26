import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-2xl">
          🌎 Countries Explorer
        </Link>
      </div>
    </nav>
  );
}
