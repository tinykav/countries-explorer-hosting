import { useEffect, useState } from "react";
import {
  getAllCountries,
  getCountryByName,
  getCountriesByRegion
} from "../services/api";
import CountryCard from "../components/CountryCard";
import SearchFilter from "../components/SearchFilter";

export default function Home() {
  const [language, setLanguage] = useState("");

  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("searchTerm") || ""
  );
  const [region, setRegion] = useState(localStorage.getItem("region") || "");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (searchTerm && searchTerm !== "") {
      handleSearch(searchTerm, true);
    } else if (region && region !== "") {
      handleFilter(region, true);
    } else {
      fetchCountries();
    }
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

  const handleSearch = async (term, isFirstLoad = false) => {
    if (!isFirstLoad) {
      setSearchTerm(term);
      localStorage.setItem("searchTerm", term);
      localStorage.removeItem("region");
      setRegion("");
    }

    if (!term) {
      fetchCountries();
      return;
    }

    try {
      const response = await getCountryByName(term);
      setCountries(response.data);
    } catch (error) {
      console.error("Error searching countries:", error);
      setCountries([]);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = async (selectedRegion, isFirstLoad = false) => {
    if (!isFirstLoad) {
      setRegion(selectedRegion);
      localStorage.setItem("region", selectedRegion);
      localStorage.removeItem("searchTerm");
      setSearchTerm("");
    }

    if (!selectedRegion) {
      fetchCountries();
      return;
    }

    try {
      const response = await getCountriesByRegion(selectedRegion);
      setCountries(response.data);
    } catch (error) {
      console.error("Error filtering countries:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClearFilters = () => {
    localStorage.removeItem("searchTerm");
    localStorage.removeItem("region");
    setSearchTerm("");
    setRegion("");
    setLanguage("");
    fetchCountries();
  };
  const handleLanguageFilter = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  if (loading) {
    return <div className="text-center p-10 text-xl">Loading countries...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <SearchFilter
        onSearch={handleSearch}
        onFilterRegion={handleFilter}
        onFilterLanguage={handleLanguageFilter}
        onClear={handleClearFilters}
        searchTerm={searchTerm}
        region={region}
        language={language}
      />

      {countries.length === 0 ? (
        <div className="text-center p-10 text-xl text-gray-600">
          No countries found.
        </div>
      ) : (
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {countries
            .filter((country) => {
              const matchesLanguage = language
                ? country.languages &&
                  Object.values(country.languages).includes(language)
                : true;
              return matchesLanguage;
            })
            .map((country) => (
              <CountryCard key={country.cca3} country={country} />
            ))}
        </div>
      )}
    </div>
  );
}
