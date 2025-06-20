import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { useState } from "react";

function NewsCardList({ newsArticles }) {
  const [displayCount, setDisplayCount] = useState(3);
  return (
    <ul className="news-card-list">
      {newsArticles.length > 0 &&
        newsArticles.slice(0, displayCount).map((item, index) => {
          return <NewsCard key={index} newsArticle={item} />;
        })}
      {/* <NewsCard newsArticle={newsArticle} /> */}
    </ul>
  );
}

export default NewsCardList;
