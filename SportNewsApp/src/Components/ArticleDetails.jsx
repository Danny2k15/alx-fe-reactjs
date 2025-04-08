const Articledetails = ({ article }) => {
  returm(
    <div className="p-4 bg-white roundednshadow-md">
      <h2 className="text-2xl font-semibold">"article image</h2>
      <img
        src={article.urlImage}
        alt="articls image"
        className="w-full h-object-cover rounded my=4"
      />
      <p>
        {" "}
        <strong>Author:</strong> {articlr.author || "Unknown"}
      </p>
      <p>
        {" "}
        <strong>Published on:</strong>
        {new Date(article.publishedAt).toLocaleDateString()}
      </p>
      <p>{article.content}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 mt-2 inline-block"
      >
        Read full atricle
      </a>
    </div>
  );
};

export default Articledetails;
