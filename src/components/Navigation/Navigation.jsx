import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import githubIcon from "../../assets/github-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import logoutIcon from "../../assets/logout.svg";
import blackLogoutIcon from "../../assets/logout-black.svg";

function Navigation({ isFooter = false, handleLoginModal }) {
  const { isLoggedIn, currentUser } = useContext(CurrentUserContext);
  const location = useLocation();
  const isSavedNewsRoute = location.pathname.startsWith("/saved-news");
  return isFooter ? (
    <div className="navigation__footer">
      <div className="navigation__internal-links">
        <Link to="/">
          <button className="navigation__home_type_footer">Home</button>
        </Link>
        <a
          href="https://tripleten.com/"
          target="_blank"
          rel="noopener noreferer"
          className="navigation__tripleten-link"
        >
          TripleTen
        </a>
      </div>
      <div className="navigation__external-links">
        <a
          href="https://www.github.com/bsilcox1990"
          target="_blank"
          rel="noopener noreferer"
          className="navigation__github-link"
        >
          <img
            src={githubIcon}
            alt="github icon"
            className="naviagtion__logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/bradleysilcox/"
          target="_blank"
          rel="noopener noreferer"
          className="navigation__linkedin-link"
        >
          <img
            src={linkedinIcon}
            alt="linkedin icon"
            className="navigation__logo"
          />
        </a>
      </div>
    </div>
  ) : isLoggedIn ? (
    <div className="navigation">
      <button
        className={`navigation__home ${
          isSavedNewsRoute && "navigation__home_type_saved-news"
        }`}
      >
        <Link to="/">Home</Link>
      </button>
      <button className="navigation__saved-news">
        <Link to="/saved-news">Saved News</Link>
      </button>
      <button
        className={`navigation__profile ${
          isSavedNewsRoute && "navigation__profile_type_saved-news"
        }`}
      >
        {currentUser}{" "}
        <img
          src={isSavedNewsRoute ? blackLogoutIcon : logoutIcon}
          alt="logout icon"
          className="navigation__logout"
        />
      </button>
    </div>
  ) : (
    <div className="navigation">
      <button className="navigation__home" type="button">
        <Link to="/">Home</Link>
      </button>

      <button
        onClick={handleLoginModal}
        className="navigation__signin"
        type="button"
      >
        Sign in
      </button>
    </div>
  );
}

export default Navigation;
