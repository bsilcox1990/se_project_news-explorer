import { useContext } from "react";
import "./Navigation.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Navigation({ isFooter = false }) {
  const { isLoggedIn } = useContext(CurrentUserContext);
  return (
    <div className="navigation">
      <button className="navigation__home" type="button">
        Home
      </button>
      <button className="navigation__login" type="button">
        Log in
      </button>
    </div>
  );
}

export default Navigation;
