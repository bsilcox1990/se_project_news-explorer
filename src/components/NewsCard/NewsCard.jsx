import "./NewsCard.css";
import saveIcon from "../../assets/save-article.svg";

function NewsCard({ newsArticle }) {
  return newsArticle ? (
    <div className="news-card">
      <div className="news-card content">
        <img
          src={saveIcon}
          alt="icon for saving news article"
          className="news-card__save-icon"
        />
        <img
          src={newsArticle.urlToImage}
          alt="picture of the news article"
          className="news-card__image"
        />
        <div className="news-card__info">
          <p className="news-card__date">{newsArticle?.date}</p>
          <h2 className="news-card__title">{newsArticle?.title}</h2>
          <p className="news-card__description">{newsArticle?.description}</p>
          <p className="news-card__source">{newsArticle?.source.name}</p>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default NewsCard;
