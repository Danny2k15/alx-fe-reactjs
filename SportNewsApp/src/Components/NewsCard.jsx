const NewsCard = ({ article, onClick }) => {
  return (
    <div
      className="border rounded-lg shadow-md p-4 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-xl font-italics mt-2">{article.title}</h3>
      <p className="text-sm mt-2">{article.description}</p>
      <p className="text-xs text-black-500 mt-2">
        {new Date(article.publishedAt).toLocaleString()}
      </p>
    </div>
  );
};
