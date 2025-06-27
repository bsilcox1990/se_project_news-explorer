import pictureOfMe from "../../assets/picture-of-me.jpg";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about__image-wrapper">
        <img
          src={pictureOfMe}
          alt="picture of bradley silcox"
          className="about__image"
        />
      </div>
      <div className="about__info">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">My name is Bradley Silcox</p>
      </div>
    </div>
  );
}

export default About;
