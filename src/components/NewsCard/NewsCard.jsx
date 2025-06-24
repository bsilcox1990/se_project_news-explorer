import { useContext, useState } from "react";
import "./NewsCard.css";
import saveIcon from "../../assets/save-article.svg";
import saveIconHover from "../../assets/save-article-hover.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function NewsCard({ newsArticle, onSaveArticle }) {
  const [hover, setHover] = useState(false);
  const { isLoggedIn } = useContext(CurrentUserContext);

  const handleSaveClick = () => {
    onSaveArticle(newsArticle);
  };

  return newsArticle ? (
    <div className="news-card">
      <div
        className={`news-card__save-icon-wrapper ${
          isLoggedIn ? "news-card__hide-tooltip" : "news-card__show-tooltip"
        }`}
        data-tooltip={isLoggedIn ? "" : "Sign in to save articles"}
      >
        <img
          src={hover ? saveIconHover : saveIcon}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={handleSaveClick}
          alt="icon for saving news article"
          className="news-card__save-icon"
        />
      </div>
      <a href={newsArticle?.url} target="_blank" rel="noopener noreferrer">
        <div className="news-card__content">
          <img
            src={newsArticle.urlToImage}
            alt="picture of the news article"
            className="news-card__image"
          />
          <div className="news-card__info">
            <p className="news-card__date">{newsArticle?.publishedAt}</p>
            <h2 className="news-card__title">{newsArticle?.title}</h2>
            <p className="news-card__description">{newsArticle?.description}</p>
            <p className="news-card__source">{newsArticle?.source.name}</p>
          </div>
        </div>
      </a>
    </div>
  ) : (
    ""
  );
}

export default NewsCard;
