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
        <p className="about__text">
          I am Bradley Silcox, a passionate full-stack software engineer
          specializing in the MERN stack (MongoDB, Express.js, React, Node.js)
          and skilled in JavaScript development. I excel at transforming Figma
          designs into pixel-perfect, responsive UI using CSS and BEM semantic
          syntax for clean, maintainable code. I have experience deploying
          websites on google cloud with nginx, PM2, and certbot, I ensure robust
          and secure applications. I am also proficient in using Git for version
          control and collaborating on projects via GitHub, including branching,
          merging, and managing pull requests. Eager to expand my expertise, I
          am diving into Python to explore AI-driven solutions and backend
          automation.
        </p>
        <p className="about__tripleten">
          Through TripleTen’s bootcamp, I went from no coding knowledge to
          building full-stack applications in under a year, mastering HTML, CSS,
          JavaScript, React, Git, and GitHub. I developed projects like Spots, a
          picture sharing app; What to Wear, a weather app with real-time API
          integration; and News Explorer, a dynamic news platform. In a six-day
          code jam, I collaborated on a fully functional expense-splitting app,
          sharpening my teamwork and communication skills. This transformative
          experience honed my ability to deliver scalable solutions and adapt
          quickly, preparing me to contribute effectively to innovative,
          user-focused projects.
        </p>
      </div>
    </div>
  );
}

export default About;
