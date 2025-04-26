import { useEffect, useState } from "react";
import {
  getAllCountries,
  getCountryByName,
  getCountriesByRegion
} from "../services/api";
import CountryCard from "../components/CountryCard";
import SearchFilter from "../components/SearchFilter";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await getAllCountries();
      setCountries(response.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (searchTerm) => {
    if (!searchTerm) {
      fetchCountries();
      return;
    }
    try {
      const response = await getCountryByName(searchTerm);
      setCountries(response.data);
    } catch (error) {
      console.error("Error searching countries:", error);
    }
  };

  const handleFilter = async (region) => {
    if (!region) {
      fetchCountries();
      return;
    }
    try {
      const response = await getCountriesByRegion(region);
      setCountries(response.data);
    } catch (error) {
      console.error("Error filtering countries:", error);
    }
  };

  if (loading) {
    return <div className="text-center p-10 text-xl">Loading countries...</div>;
  }

  return (
    <div>
      <SearchFilter onSearch={handleSearch} onFilter={handleFilter} />
      <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}
