import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import About from "../About/About";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import { getNews } from "../../utils/api";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState("Bradley");
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState({});
  const [savedArticles, setSavedArticles] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [activeModal, setActiveModal] = useState("");

  const handleRegisterModal = () => setActiveModal("register-user");
  const handleLoginModal = () => setActiveModal("login-user");
  const handleCloseModal = () => setActiveModal("");

  const capitalizedWords = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };

  const handleSaveArticle = (article) => {
    setSavedArticles((prev) => [...prev, article]);
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

  useEffect(() => {
    console.log("saved articles", savedArticles);
  }, [savedArticles]);

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
                    <Header handleLoginModal={handleLoginModal} />
                    <Main
                      onSearch={handleSearch}
                      newsArticles={articles}
                      onSaveArticle={handleSaveArticle}
                    />
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
                  <SavedNews
                    keywords={keywords}
                    savedArticles={savedArticles}
                  />
                </>
              }
            />
          </Routes>
          <Footer isFooter={true} />
        </div>
        <RegisterModal
          activeModal={activeModal}
          onClose={handleCloseModal}
          handleLoginModal={handleLoginModal}
        />
        <LoginModal
          activeModal={activeModal}
          onClose={handleCloseModal}
          handleRegisterModal={handleRegisterModal}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
