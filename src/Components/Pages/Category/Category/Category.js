import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummary from "../../Shared/NewsSummary/NewsSummary";

const Category = () => {
  const catNews = useLoaderData();
  return (
    <div>
      <h1>Total Category: {catNews.length}</h1>
      {catNews.map((news) => (
        <NewsSummary key={news._id} news={news}></NewsSummary>
      ))}
    </div>
  );
};

export default Category;
