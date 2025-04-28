import { Link } from "react-router-dom";
import bannerImage from "../assets/banner.png"; // ✅ import your image!

export default function Navbar() {
  return (
    <header
      className="h-24 flex items-center bg-cover bg-center shadow-md"
      style={{
        backgroundImage: `url(${bannerImage})`
      }}
    >
      <div className="px-8 mx-auto flex justify-center w-full">
        <Link
          to="/"
          className="text-white text-4xl font-bold tracking-wide hover:text-gray-300 transition-colors duration-300 drop-shadow-lg"
        >
          Countries Explorer
        </Link>
      </div>
    </header>
  );
}
