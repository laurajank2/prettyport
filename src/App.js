import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import ContactMe from "./pages/contactme";
import Projects from "./pages/projects";

function App() {
  return (
    <div className="background">
        <div className="bigbackground"/>
        <Router >
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact-me" component={ContactMe} />
            <Route path="/projects" component={Projects} />
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
