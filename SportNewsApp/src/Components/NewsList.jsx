import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import cookie from "cookie";

const API_KEY = "x6KqhYBbPbdWW2R13q2gNhmWqOvcB6Dm";

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const newsUrl = `https://api.thenewsapi.com/v1/news/sports?_token=${API_KEY}&locale=us`;

  useEffect(() => {
    const parsedCookies = cookie?.parse(document.cookie);

    const authToken = parsedCookies?.authToken;

    console.log(authToken);

    const fetchArticles = async () => {
      try {
        const response = await axios.get(newsUrl, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setArticles(response?.data?.articles);
        setLoading(false);
      } catch (err) {
        setError("Failed to load news");
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading)
    return <div className="text-center text-harsh-500">loading...</div>;
  if (error) return <div className="text-center text-black 500">{error}</div>;

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles?.map((article) => (
        <div
          key={article.url}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          {article.urlToImage && (
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h3 className="text-xl font-semibold">{article.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{article.description}</p>
            <div className="mt-4">
              <Link
                to={`/article/${encodeURIComponent(article.url)}`}
                className="text-blue-500 hover:text-blue-700"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
