export default function SearchFilter({
  onSearch,
  onFilter,
  onClear,
  searchTerm,
  region
}) {
  const handleSearchChange = (e) => {
    const value = e.target.value;
    onSearch(value);
  };

  const handleRegionChange = (e) => {
    const value = e.target.value;
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
      <button
        onClick={onClear}
        className="mt-2 md:mt-0 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
      >
        Clear Filters
      </button>
    </div>
  );
}
