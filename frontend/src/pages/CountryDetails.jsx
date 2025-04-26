import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCountryByCode } from "../services/api";

export default function CountryDetails() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountry();
  }, [code]);

  const fetchCountry = async () => {
    try {
      const response = await getCountryByCode(code);
      setCountry(response.data);
    } catch (error) {
      console.error("Error fetching country details:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center p-10 text-xl">Loading country details...</div>
    );
  }

  if (!country) {
    return <div className="text-center p-10 text-xl">Country not found.</div>;
  }

  return (
    <div className="p-10">
      <Link to="/" className="inline-block mb-6 text-blue-500 hover:underline">
        ← Back to Home
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={country.flags?.png}
          alt={country.name?.common}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{country.name?.common}</h1>
          <p>
            <span className="font-semibold">Capital:</span>{" "}
            {country.capital?.[0]}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-semibold">Population:</span>{" "}
            {country.population.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Languages:</span>{" "}
            {country.languages
              ? Object.values(country.languages).join(", ")
              : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
