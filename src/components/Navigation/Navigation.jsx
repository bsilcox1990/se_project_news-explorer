import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import githubIcon from "../../assets/github-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import logoutIcon from "../../assets/logout.svg";

function Navigation({ isFooter = false }) {
  const { isLoggedIn, currentUser } = useContext(CurrentUserContext);
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
      <button className="navigation__home">
        <Link to="/">Home</Link>
      </button>
      <button className="navigation__saved-news">Saved News</button>
      <button className="navigation__profile">
        {currentUser}{" "}
        <img
          src={logoutIcon}
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

      <button className="navigation__signin" type="button">
        Sign in
      </button>
    </div>
  );
}

export default Navigation;
