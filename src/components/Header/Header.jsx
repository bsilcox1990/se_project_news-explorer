import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header({ text }) {
  const { isLoggedIn } = useContext(CurrentUserContext);
  return (
    <div className="header">
      <h1 className="header__title">
        <Link to="/">NewsExplorer</Link>
      </h1>
      <Navigation />
    </div>
  );
}

export default Header;
