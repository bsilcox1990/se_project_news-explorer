import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import About from "../About/About";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import RegistrationSuccessModal from "../RegistrationSuccessModal/RegistrationSuccessModal";
import ConfirmLogoutModal from "../ConfirmLogoutModal/ConfirmLogoutModal";
import LoginModal from "../LoginModal/LoginModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { getNews } from "../../utils/api";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [submitError, setSubmitError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [topic, setTopic] = useState("");
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const navigate = useNavigate();

  const savedArticleUrls = new Set(
    savedArticles.map((article) => {
      return article.url;
    })
  );

  const handleRegisterModal = () => setActiveModal("register-user");
  const handleLoginModal = () => setActiveModal("login-user");
  const handleRegistrationSuccessModal = () => setActiveModal("success");
  const handleConfirmLogoutModal = () => setActiveModal("confirm-logout");
  const handleCloseModal = () => setActiveModal("");

  const handleSaveArticle = (article) => {
    setSavedArticles((prev) => [...prev, { ...article, topic }]);
  };

  const handleDeleteArticle = (article) => {
    const tempArray = savedArticles.filter((item) => {
      return item !== article;
    });
    setSavedArticles(tempArray);
  };

  console.log("submit error", submitError);

  const handleSearch = (query) => {
    if (!query) {
      setSubmitError("Please enter a keyword");
      return;
    }
    setIsLoading(true);
    setTopic(query);
    getNews(query)
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((err) => {
        console.error(err);
        setSubmitError(
          "Sorry, something went wrong during the request.  Please try again later."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleRegisterUser = () => {
    handleRegistrationSuccessModal();
  };

  const handleLoginUser = () => {
    setIsLoggedIn(true);
    setCurrentUser("Bradley");
    handleCloseModal();
  };

  const handleLogoutModal = () => {
    handleConfirmLogoutModal();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    handleCloseModal();
    navigate("/");
  };

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
                    <Header
                      handleLoginModal={handleLoginModal}
                      onLogout={handleLogoutModal}
                    />
                    <Main
                      onSearch={handleSearch}
                      newsArticles={articles}
                      onSaveArticle={handleSaveArticle}
                      savedArticles={savedArticles}
                      savedArticleUrls={savedArticleUrls}
                      isLoading={isLoading}
                      topic={topic}
                      submitError={submitError}
                    />
                  </div>
                  <About />
                </>
              }
            />
            <Route
              path="/saved-news"
              element={
                <ProtectedRoute>
                  <Header onLogout={handleLogoutModal} />
                  <SavedNews
                    savedArticles={savedArticles}
                    onDeleteArticle={handleDeleteArticle}
                    savedArticleUrls={savedArticleUrls}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer isFooter={true} />
        </div>
        <RegisterModal
          activeModal={activeModal}
          onClose={handleCloseModal}
          handleLoginModal={handleLoginModal}
          onRegister={handleRegisterUser}
        />
        <LoginModal
          activeModal={activeModal}
          onClose={handleCloseModal}
          handleRegisterModal={handleRegisterModal}
          onLogin={handleLoginUser}
        />
        <RegistrationSuccessModal
          activeModal={activeModal}
          handleLoginModal={handleLoginModal}
          onClose={handleCloseModal}
        />
        <ConfirmLogoutModal
          activeModal={activeModal}
          onClose={handleCloseModal}
          onLogout={handleLogout}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
