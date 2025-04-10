import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./Components/SearchBar";
import ArticleDetails from "./Components/ArticleDetails";
import NewsList from "./Components/NewsList";
import NewsCard from "./Components/NewsCard";
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-800 text-white p-4 shadow-md">
          <h1 className="text-2xl font-bold"> Sports News App</h1>
        </header>
        <main className="max-w-6xl mx-auto p-4"></main>

        <SearchBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<NewsList />} />
            <Route path="/article/:id" element={<ArticleDetails />} />\
            <Route path="/card" element={<NewsCard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
