import { useState } from "react";
import "./Main.css";
import "../SearchForm/SearchForm.css";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";

function Main({ onSearch, newsArticles }) {
  const [displayCount, setDisplayCount] = useState(3);

  const updateDisplayCount = () => {
    setDisplayCount(displayCount + 3);
  };

  return (
    <div className="main">
      <div className="main__content">
        <section className="search">
          <h2 className="main__title">What's going on in the world?</h2>
          <p className="main__subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchForm onSearch={onSearch} />
        </section>
      </div>
      {newsArticles.length > 0 && (
        <div className="search-results__wrapper">
          <section className="search-results">
            <h2 className="search-results__title">Search results</h2>

            <NewsCardList
              newsArticles={newsArticles}
              displayCount={displayCount}
            />

            <div className="search-results__button-wrapper">
              <button
                onClick={updateDisplayCount}
                type="button"
                className="search-results__expand-button"
              >
                Show more
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Main;
