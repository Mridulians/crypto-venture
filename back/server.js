const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS
app.use(cors());

// Load environment variables
require("dotenv").config();

console.log("News API Key:", process.env.NEWS_API_KEY);
console.log("YouTube API Key:", process.env.YOUTUBE_API_KEY);


// Proxy route to fetch news from News API
app.get("/api/news", async (req, res) => {
  const category = req.query.q; // Get category from query params
  try {
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: category,
        apiKey: process.env.NEWS_API_KEY, // Use News API key from .env
        sortBy: "publishedAt",
        language: "en",
      },
    });

    const filteredNews = response.data.articles.filter((article) => {
      // Basic check for English characters
      return /^[A-Za-z0-9\s.,'-]+$/.test(article.title);
    });

    res.json({ articles: filteredNews });
  } catch (error) {
    // Enhanced error logging for the News API
    console.error(
      "Error fetching news:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ message: "Error fetching news data", error });
  }
});


// Proxy route to fetch videos from YouTube API
app.get("/api/youtube", async (req, res) => {
  const query = "News related to crypto currency , bitcoin , Ethereum only in English"; // Default search query
  const regionCode = req.query.regionCode || ""; // Optional regionCode filter

  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          q: query,
          type: "video",
          maxResults: 100,
          key: process.env.YOUTUBE_API_KEY, // Use YouTube API key from .env
        //   regionCode: regionCode, // Fix: use the variable instead of US
        },
      }
    );

    

    // Send the response data (videos) back to the frontend
    res.json(response.data);
  } catch (error) {
    // Enhanced error logging for the YouTube API
    console.error(
      "Error fetching YouTube data:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ message: "Error fetching YouTube data", error });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
