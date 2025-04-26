import { useState } from "react";

export default function SearchFilter({ onSearch, onFilter }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleRegionChange = (e) => {
    const value = e.target.value;
    setRegion(value);
    onFilter(value);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6">
      <input
        type="text"
        placeholder="Search countries..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="border border-gray-300 rounded-md p-2 w-full md:w-1/2"
      />
      <select
        value={region}
        onChange={handleRegionChange}
        className="border border-gray-300 rounded-md p-2 w-full md:w-1/4"
      >
        <option value="">All Regions</option>
        <option value="Asia">Asia</option>
        <option value="Americas">Americas</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
