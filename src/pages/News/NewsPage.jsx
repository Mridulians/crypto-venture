// src/pages/News/NewsPage.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  const { category } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything`, {
          params: {
            q: category, // Use the category as the query parameter
            apiKey: "45fdfe58da864dd7843632e3d4f6d9b9", // Your API key
            sortBy: "publishedAt", // Sorting by published date
            language: "en", // Set language to English
          },
        });
        const sortedNews = response.data.articles.sort(
          (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt) // Sorting in descending order
        );
        setNews(sortedNews); // Set the sorted articles to the state
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [category]);

  console.log(news);

  return (
    <div className="container mx-auto p-4 xl:w-[80%]">
      <h1 className="text-3xl font-bold text-center mb-4">
        {category.toUpperCase()} NEWS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[2rem]">
        {news.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={
                item.urlToImage ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUnvISVTYopMAy17o3mB2lfSPeEjoKfAdV2w&s"
              }
              alt={item.title || "Title Not Available"}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                {item.title !== "[removed]"
                  ? item.title
                  : "Title Not Available"}
              </h2>
              <p className="text-gray-700 mb-4">
                {item.description !== "[removed]"
                  ? item.description
                  : "Description Not Available"}
              </p>

              <div className="flex flex-row justify-between my-[1rem]">
                <p className="text-red-700">
                  {new Date(item.publishedAt).toLocaleDateString()}
                </p>
                <p className="text-green-700">{item.source.name}</p>
              </div>
              <a
                href={item.url}
                className="text-blue-500 underline"
                // target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
