import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ newsArticles, displayCount }) {
  return (
    <ul className="news-card-list">
      {newsArticles.length > 0 &&
        newsArticles.slice(0, displayCount).map((item, index) => {
          return <NewsCard key={index} newsArticle={item} />;
        })}
    </ul>
  );
}

export default NewsCardList;
