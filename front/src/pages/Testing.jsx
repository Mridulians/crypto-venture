// // Install axios via npm
// // npm install axios

// import{ useState, useEffect } from 'react';
// import axios from 'axios';

// const API_KEY = 'AIzaSyBmYTKK6AxXIRDrY0DcbHBuwwYNkCB-BEo'; // Replace with your YouTube API key
// const SEARCH_QUERY = 'ai'; // You can modify this for other search terms

// function Testing() {
//   const [videos, setVideos] = useState([]);

//   // Fetch videos from YouTube
//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get(
//           `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${SEARCH_QUERY}&type=video&key=${API_KEY}`
//         );
//         setVideos(response.data.items);
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//       }
//     };
//     fetchVideos();
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h1 className="text-2xl font-bold mb-4">Latest News Videos</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {videos.map((video) => (
//           <div key={video.id.videoId} className="rounded-lg shadow-lg overflow-hidden">
//             <iframe
//               width="100%"
//               height="250"
//               src={`https://www.youtube.com/embed/${video.id.videoId}`}
//               title={video.snippet.title}
//               frameBorder="0"
//               allowFullScreen
//             ></iframe>
//             <div className="p-4">
//               <h2 className="text-lg font-semibold">{video.snippet.title}</h2>
//               <p className="text-gray-600">{video.snippet.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Testing;

import { useEffect, useState } from "react";
import axios from "axios";

const Testing = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "ac3d24581bc44c38807be469cdca0f03";
  const API_URL = "https://api.bing.microsoft.com/v7.0/news/search";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            "Ocp-Apim-Subscription-Key": API_KEY,
          },
          params: {
            q: "latest news",
            count: 10,
            mkt: "en-US",
          },
        });
        setNews(response.data.value);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  console.log(news);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching news: {error.message}</div>;

  return (
    <div>
      <h1>Latest News</h1>
      <ul>
        {news.map((article) => (
          <li key={article.url}>
            {" "}
            {/* Using URL as a unique key */}
            <h2>{article.name}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
            <img src={article.image.thumbnail.contentUrl} alt="" />
            {/* Check for videos in the article source or content */}
            {article.video ? (
              <video width="320" height="240" controls>
                <source src={article.video.motionThumbnailUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : article.content ? (
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testing;
