import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header text="hello" />
        <Main text="there" />
        <Footer text="world" />
      </div>
    </div>
  );
}

export default App;
