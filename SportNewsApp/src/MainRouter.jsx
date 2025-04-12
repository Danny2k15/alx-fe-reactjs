import { createBrowserRouter, useOutletContext } from "react-router-dom";
import MainApp from "./MainApp";
import ArticleDetails from "./Components/ArticleDetails";
import NewsCard from "./Components/NewsCard";
import NewsList from "./Components/NewsList";

const HomeRoute = () => {
  const { category, searchQuery, handleCategoryChange } = useOutletContext();

  return (
    <>
      {/* <CategoryFilter
        activeCategory={category}
        onCategoryChange={handleCategoryChange}
      /> */}
      <NewsList category={category} searchQuery={searchQuery} />
    </>
  );
};

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    children: [
      {
        index: true,
        element: <HomeRoute />,
      },
      {
        path: "/article/:id",
        element: <ArticleDetails />,
      },
      {
        path: "/card",
        element: <NewsCard />,
      },
    ],
  },
]);
