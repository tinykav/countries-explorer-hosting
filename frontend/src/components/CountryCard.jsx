import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function CountryCard({ country }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some((fav) => fav.cca3 === country.cca3));
  }, [country.cca3]);

  const toggleFavorite = (e) => {
    e.preventDefault(); // Prevent navigation when clicking heart
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      const newFavorites = favorites.filter((fav) => fav.cca3 !== country.cca3);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    } else {
      favorites.push(country);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/country/${country.cca3}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer relative">
        <img
          src={country.flags?.png}
          alt={country.name?.common}
          className="w-full h-48 object-cover"
        />

        {/* Favorite Icon */}
        <div
          onClick={toggleFavorite}
          className="absolute top-2 right-2 text-xl text-red-500 hover:scale-125 transition-transform"
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </div>

        <div className="p-5">
          <h2 className="font-bold text-2xl mb-2 text-gray-800">
            {country.name?.common}
          </h2>
          <p className="text-gray-600">
            <span className="font-semibold">Capital:</span>{" "}
            {country.capital?.[0]}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Population:</span>{" "}
            {country.population.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
}
