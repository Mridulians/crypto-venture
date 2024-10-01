// src/components/NewsUpdates.jsx
import { useEffect, useState } from "react";

// Fetching from a public news API (replace with your actual API key)
const API_KEY = "45fdfe58da864dd7843632e3d4f6d9b9";
const NEWS_API_URL = `https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=${API_KEY}`;

const NewsUpdates = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  // Fetch news on component mount
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(NEWS_API_URL);
        const data = await response.json();

        // Filter out articles with the title "Removed"
        const filteredArticles = data.articles.filter(
          (article) => article.title !== "[Removed]"
        );

        // Set state with filtered articles, limit to 5
        setNewsArticles(filteredArticles.slice(0, 5));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="bg-white p-4 shadow-md rounded-lg mt-8">
      <h2 className="text-xl font-bold">Latest Market News</h2>
      <ul className="mt-4 space-y-8">
        {newsArticles.length === 0 ? (
          <p className="text-gray-500">Loading news updates...</p>
        ) : (
          newsArticles.map((article, index) => (
            <li key={index} className="">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {article.title}
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default NewsUpdates;
