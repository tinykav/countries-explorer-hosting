import { Link } from "react-router-dom";

export default function CountryCard({ country }) {
  return (
    <Link to={`/country/${country.cca3}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform">
        <img
          src={country.flags?.png}
          alt={country.name?.common}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2">{country.name?.common}</h2>
          <p className="text-gray-600">Capital: {country.capital?.[0]}</p>
          <p className="text-gray-600">Region: {country.region}</p>
          <p className="text-gray-600">
            Population: {country.population.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
}
