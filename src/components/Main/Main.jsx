import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";

function Main({ onSearch, newsArticles }) {
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
      <section className="search-results">
        <NewsCardList newsArticles={newsArticles} />
      </section>
    </div>
  );
}

export default Main;
