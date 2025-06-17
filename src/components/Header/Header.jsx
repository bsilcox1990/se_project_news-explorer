import { useContext } from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header({ text }) {
  const { isLoggedIn } = useContext(CurrentUserContext);
  return (
    <div className="header">
      <h1 className="header__title">NewsExplorer</h1>
      <Navigation isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default Header;
