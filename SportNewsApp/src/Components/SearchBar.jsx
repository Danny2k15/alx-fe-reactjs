import React from "react";

const SearchBar = ({ searchQuery, onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="flex flex-col sm:p-4">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search for news..."
        className="p-2 rounded border w-full"
      />
    </div>
  );
};

export default SearchBar;
