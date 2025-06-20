import "./Footer.css";
import Navigation from "../Navigation/Navigation";

function Footer({}) {
  return (
    <div className="footer">
      <p className="footer__text">
        &copy; {new Date().getFullYear()} Supersite, Powered by News API
      </p>
      <Navigation isFooter={true} />
    </div>
  );
}

export default Footer;
