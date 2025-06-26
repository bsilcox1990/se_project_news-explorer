import { useState } from "react";
import "./Main.css";
import "../SearchForm/SearchForm.css";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";

function Main({
  onSearch,
  newsArticles,
  onSaveArticle,
  savedArticles,
  savedArticleUrls,
  isLoading,
}) {
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
        <div className="main__search-results-wrapper">
          <section className="main__search-results">
            {!isLoading ? (
              <>
                <h2 className="main__search-results-title">Search results</h2>
                <NewsCardList
                  newsArticles={newsArticles}
                  displayCount={displayCount}
                  onSaveArticle={onSaveArticle}
                  savedArticles={savedArticles}
                  savedArticleUrls={savedArticleUrls}
                />
                <div className="main__search-results-button-wrapper">
                  <button
                    onClick={updateDisplayCount}
                    type="button"
                    className="main__search-results-expand-button"
                  >
                    Show more
                  </button>
                </div>
              </>
            ) : (
              <Preloader />
            )}
          </section>
        </div>
      )}
    </div>
  );
}

export default Main;
