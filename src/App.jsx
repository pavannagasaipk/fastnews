import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage.jsx";
import NewsFeed from "./NewsFeed.jsx";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (name, phone) => {
    console.log("User Logged In:", { name, phone });
    setIsLoggedIn(true);
    navigate("/news"); // Redirect to News Feed after login
  };

  return (
    <Routes>
      <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/news" element={isLoggedIn ? <NewsFeed /> : <LoginPage onLogin={handleLogin} />} />
    </Routes>
  );
}

export default App;
