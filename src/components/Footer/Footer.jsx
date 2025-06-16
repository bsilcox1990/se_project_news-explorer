import "./Footer.css";

function Footer({ text }) {
  return (
    <div className="footer">
      <p className="footer__text">
        &copy; {new Date().getFullYear()} Supersite, Powered by News API
      </p>
    </div>
  );
}

export default Footer;
