import {
  FaSearch,
  FaGlobe,
  FaTimes,
  FaHeart,
  FaLanguage
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function SearchFilter({
  onSearch,
  onFilterRegion,
  onFilterLanguage,
  onClear,
  searchTerm,
  region,
  language
}) {
  const handleSearchChange = (e) => {
    const value = e.target.value;
    onSearch(value);
  };

  const handleRegionChange = (e) => {
    const value = e.target.value;
    onFilterRegion(value);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-6 bg-white rounded-xl shadow-md m-4">
      {/* Search Input */}
      <div className="relative w-full md:w-1/2">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search countries..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-lg pl-12 pr-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Region Select */}
      <div className="relative w-full md:w-1/4">
        <FaGlobe className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <select
          value={region}
          onChange={handleRegionChange}
          className="border border-gray-300 rounded-lg pl-12 pr-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 appearance-none"
        >
          <option value="">All Regions</option>
          <option value="Asia">Asia</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      {/* Language Select */}
      <div className="relative w-full md:w-1/4">
        <FaLanguage className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <select
          value={language}
          onChange={(e) => onFilterLanguage(e.target.value)}
          className="border border-gray-300 rounded-lg pl-12 pr-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400 appearance-none"
        >
          <option value="">All Languages</option>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="Spanish">Spanish</option>
          <option value="Arabic">Arabic</option>
          <option value="Chinese">Chinese</option>
        </select>
      </div>

      {/* Clear Filters Button */}
      <button
        onClick={onClear}
        className="mt-2 md:mt-0 bg-gray-300 hover:bg-gray-400 text-gray-700 px-5 py-3 rounded-lg flex items-center gap-2 transition"
      >
        <FaTimes />
        Clear
      </button>

      {/* Favorites Link */}
      <Link
        to="/favorites"
        className="flex items-center gap-2 text-gray-500 text-lg font-semibold hover:text-gray-700 transition"
      >
        <FaHeart className="text-red-400" />
        Favorites
      </Link>
    </div>
  );
}
