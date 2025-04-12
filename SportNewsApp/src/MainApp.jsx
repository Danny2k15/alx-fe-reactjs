import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import Footer from "./Components/Footer";

function MainApp() {
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-800 text-white shadow-md">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h1 className="text-2xl font-bold mb-2 md:mb-0">Sports News App</h1>
            <Navbar />
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto p-4 w-full flex-grow">
        <div className="mb-4">
          <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Outlet context={{ category, searchQuery, handleCategoryChange }} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainApp;
