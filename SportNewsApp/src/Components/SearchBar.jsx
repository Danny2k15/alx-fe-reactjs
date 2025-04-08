const { defaultServerConditions } = require("vite");

import React from "react";

const SearchBar = ({ searchQuery }) => {
  return (
    <div className="flex flex-col smp-4">
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
