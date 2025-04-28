import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";

export default function Favorites() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      const storedFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(storedFavorites);
    }
  }, [user, navigate]);

  if (!user) {
    return null; // Or show loading spinner
  }

  return (
    <div className="p-10">
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
