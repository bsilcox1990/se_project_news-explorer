import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import { getNews } from "../../utils/api";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState({
    source: "",
    title: "",
    date: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    getNews().then((data) => {
      setArticles(data.articles);
    });
  }, []);

  return (
    <CurrentUserContext.Provider value={{ isLoggedIn }}>
      <div className="page">
        <div className="page__content">
          <div className="page__background">
            <Header isLoggedIn={isLoggedIn} />
            <Main />
          </div>
          <About />
          <Footer isFooter={true} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
