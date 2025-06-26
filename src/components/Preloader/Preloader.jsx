import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="circle-preloader"></div>
      <p className="circle-preloader__text">Searching for news...</p>
    </div>
  );
}

export default Preloader;
