import React, { useState, useEffect } from "react";

const API_KEY = "1fa88e37765ac3ea805a2981190c40b9";
const API_URL = `https://gnews.io/api/v4/top-headlines?country=in&token=${API_KEY}`;

function NewsFeed() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log("API Response:", data);
      setNews(data.articles || []);
    } catch (error) {
      console.error("API Error:", error);
      setError("Failed to fetch news");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Loading & Error Handling */}
      {loading && <p>Loading news...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* News Feed */}
      <div className="grid gap-4">
        {news.length > 0 ? (
          news.map((newsItem, index) => (
            <div key={index} className="p-4 border rounded-lg shadow">
              <img
                src={newsItem.image || "https://via.placeholder.com/400"}
                alt={newsItem.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="text-xl font-bold mt-2">{newsItem.title}</h2>
              <p className="text-gray-600 mt-1">{newsItem.description}</p>
              <a href={newsItem.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                Read more
              </a>
            </div>
          ))
        ) : (
          <p>No news found.</p>
        )}
      </div>
    </div>
  );
}

export default NewsFeed;


