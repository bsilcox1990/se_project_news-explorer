import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <div className="page__background">
          <Header text="hello" />
          <Main text="there" />
        </div>
        <About />
        <Footer text="world" />
      </div>
    </div>
  );
}

export default App;
