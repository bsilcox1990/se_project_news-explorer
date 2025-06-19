import "./NewsCard.css";

function NewsCard({ article }) {
  return (
    <div className="news-card">
      <div className="news-card content">
        <h2 className="news-card__title"></h2>
        <p className="news-card__description"></p>
      </div>
    </div>
  );
}

export default NewsCard;
