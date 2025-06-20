import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery("");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__container">
        <input
          type="text"
          name="search"
          id="search"
          onChange={handleChange}
          value={query || ""}
          className="search-form__input"
          placeholder="Enter topic"
        />
        <button className="search-form__submit-button">Search</button>
      </div>
    </form>
  );
}

export default SearchForm;
