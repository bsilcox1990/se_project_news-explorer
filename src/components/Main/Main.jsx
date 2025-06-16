import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";

function Main({ text }) {
  return (
    <div className="main">
      <div className="main__content">
        <h2 className="main__title">What's going on in the world?</h2>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm />
      </div>
    </div>
  );
}

export default Main;
