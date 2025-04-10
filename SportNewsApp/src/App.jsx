"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SearchBar from "./Components/SearchBar"
import ArticleDetails from "./Components/ArticleDetails"
import NewsList from "./Components/NewsList"
import NewsCard from "./Components/NewsCard"
import Footer from "./Components/Footer"
import NavBar from "./Components/Navbar"

function App() {
  const [category, setCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory)
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-blue-800 text-white shadow-md">
          <div className="max-w-6xl mx-auto p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h1 className="text-2xl font-bold mb-2 md:mb-0">Sports News App</h1>
              <NavBar />
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto p-4 w-full flex-grow">
          <div className="mb-4">
            <SearchBar onSearch={handleSearch} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <CategoryFilter activeCategory={category} onCategoryChange={handleCategoryChange} />
                      <NewsList category={category} searchQuery={searchQuery} />
                    </>
                  }
                />
                <Route path="/article/:id" element={<ArticleDetails />} />
                <Route path="/card" element={<NewsCard />} />
              </Routes>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4 text-blue-800">Trending</h2>
                <Trending />
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4 text-blue-800">Live Scores</h2>
                <LiveScores />
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
