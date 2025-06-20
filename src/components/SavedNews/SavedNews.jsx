import { useContext, useState } from "react";
import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedNews({ newsArticles, keywords }) {
  const [count, setCount] = useState(0);
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
      <NewsCardList newsArticles={newsArticles} />
    </div>
  );
}

export default SavedNews;
