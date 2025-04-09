import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./Components/SearchBar";
import ArticleDetails from "./Components/ArticleDetails";
import NewsList from "./Components/NewsList";
import NewsCard from ",/Components/NewsCard";
function App() {
  return (
    <Router>
      <div className="SportNewsApp">
        <SearchBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<NewsList />} />
            <Route path="/article:id" element={<ArticleDetails />} />\
            <Route path="/card" element={<NewsCard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
