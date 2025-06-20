import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header({}) {
  const location = useLocation();
  const isSavedNewsRoute = location.pathname.startsWith("/saved-news");

  return (
    <div className={`header ${isSavedNewsRoute && "header_type_saved-news"}`}>
      <h1
        className={`header__title ${
          isSavedNewsRoute && "header__title_type_saved-news"
        }`}
      >
        <Link to="/">NewsExplorer</Link>
      </h1>
      <Navigation />
    </div>
  );
}

export default Header;
