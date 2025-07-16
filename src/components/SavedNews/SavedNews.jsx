import { useContext } from "react";
import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedNews({ savedArticles, onDeleteArticle, savedArticleUrls }) {
  const count = savedArticles.length;
  const keywords = [
    ...new Set(
      savedArticles.map((article) => {
        return (
          article.topic.charAt(0).toUpperCase() +
          article.topic.slice(1).toLowerCase()
        );
      })
    ),
  ];
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="saved-news">
      <div className="saved-news__header">
        <h2 className="saved-news__title">Saved articles</h2>
        <p className="saved-news__info">
          {currentUser}, you have {count} saved articles
        </p>
        <p className="saved-news__keywords">
          By keywords:{" "}
          <span style={{ fontWeight: 700 }}>{keywords.join(", ")}</span>
        </p>
      </div>
      {savedArticles.length > 0 && (
        <NewsCardList
          savedArticles={savedArticles}
          onDeleteArticle={onDeleteArticle}
          savedArticleUrls={savedArticleUrls}
        />
      )}
    </div>
  );
}

export default SavedNews;
