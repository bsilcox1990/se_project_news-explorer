import "./Footer.css";
import Navigation from "../Navigation/Navigation";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        &copy; {new Date().getFullYear()} Supersite, Powered by News API
      </p>
      <Navigation isFooter={true} />
    </footer>
  );
}

export default Footer;
