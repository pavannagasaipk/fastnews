import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage.jsx";
import NewsFeed from "./NewsFeed.jsx";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/news"); // Redirect if already logged in
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = (name, phone) => {
    console.log("User Logged In:", { name, phone });
    localStorage.setItem("isLoggedIn", "true"); // Save login state
    setIsLoggedIn(true);
    navigate("/news");
  };

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <NewsFeed /> : <LoginPage onLogin={handleLogin} />} />
      <Route path="/news" element={isLoggedIn ? <NewsFeed /> : <LoginPage onLogin={handleLogin} />} />
    </Routes>
  );
}

export default App;
