/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category, searchQuery }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const filteredArticles = data.articles.filter(article => article.urlToImage);
        setArticles(filteredArticles);
      });
  }, [category]);

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {filteredArticles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
