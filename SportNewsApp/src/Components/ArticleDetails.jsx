import React from "react";
import { useLocation } from "react-router-dom";

const ArticleDetails = ({ article }) => {
  const { state } = useLocation();
  const article = state?.article;

  if (!article) {
    return (
      <div className="text-center text-gray-500">No article data found.</div>
    );
  }

  return (
    <div className="p-4 bg-white rounded shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>

      {article.image_url && (
        <img
          src={article.image_url}
          alt="Article"
          className="w-full h-64 object-cover rounded my-4"
        />
      )}

      <p>
        <strong>Author:</strong> {article.author || "Unknown"}
      </p>

      <p>
        <strong>Published on:</strong>{" "}
        {new Date(article.published_at).toLocaleDateString()}
      </p>

      <p className="mt-4 text-gray-700">
        {article.description || article.content}
      </p>

      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black-500 hover:text-gray-700 mt-4 inline-block"
      >
        Read full article
      </a>
    </div>
  );
};

export default ArticleDetails;
