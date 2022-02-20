import React from "react";
import { Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import "./App.css";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div>
      <NavBar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
      {path === "/" || path === "/about" || path === "/contact" ? (
        <Footer />
      ) : null}
    </div>
  );
}

export default App;
