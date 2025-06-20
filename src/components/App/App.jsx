import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import About from "../About/About";
import Footer from "../Footer/Footer";
import { getNews } from "../../utils/api";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState("Bradley");
  const [articles, setArticles] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [article, setArticle] = useState({
    source: "The verge",
    title: "Apple’s upgraded Siri might not arrive until next spring",
    date: "2025-06-12T21:45:33Z",
    description:
      "Apple is aiming to launch the upgraded Siri that it originally previewed at WWDC 2024 in spring 2026 with iOS 26.4, according to Bloomberg. At WWDC last year, Apple showed off how Siri would be able to do things like understand your personal context or take a…",
    image:
      "https://platform.theverge.com/wp-content/uploads/sites/2/2025/06/DSC08596_processed.jpg.webp?quality=90&strip=all&crop=0%2C11.097693417406%2C100%2C77.804613165189&w=1200",
  });

  const capitalizedWords = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };

  const handleSearch = (query) => {
    getNews(query)
      .then((data) => {
        setArticles(data.articles);
        const capitalQuery = capitalizedWords(query);
        setKeywords((prev) => [...prev, capitalQuery]);
      })
      .catch(console.error);
  };

  useEffect(() => {
    console.log("keywords array", keywords);
  }, [keywords]);

  useEffect(() => {
    console.log("in use effect", articles);
  }, [articles]);

  console.log("outside use effect", articles);

  return (
    <CurrentUserContext.Provider value={{ isLoggedIn, currentUser }}>
      <div className="page">
        <div className="page__content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="page__background">
                    <Header />
                    <Main onSearch={handleSearch} newsArticles={articles} />
                  </div>
                  <About />
                </>
              }
            />
            <Route
              path="/saved-news"
              element={
                <>
                  <Header />
                  <SavedNews newsArticles={articles} keywords={keywords} />
                </>
              }
            />
          </Routes>

          <Footer isFooter={true} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
