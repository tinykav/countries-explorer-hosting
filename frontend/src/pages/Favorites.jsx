import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";
import { Link } from "react-router-dom";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="p-10">
      <Link to="/" className="inline-block mb-6 text-blue-500 hover:underline">
        ← Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-8 text-center">
        Favorite Countries
      </h1>

      {favorites.length === 0 ? (
        <div className="text-center text-gray-500">No favorites yet!</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {favorites.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}
    </div>
  );
}
