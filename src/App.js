import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Logo from "./components/Navbar/logo";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import ContactMe from "./pages/contactme";
import Projects from "./pages/projects";
import Community from "./pages/community";
import Engagement from "./pages/engagement";

function App() {
  return (
    <div className="background">
        <div className="bigbackground"/>
        <Router >
          <Logo />
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact-me" component={ContactMe} />
            <Route path="/projects" component={Projects} />
            <Route path="/community" component={Community} />
            <Route path="/engagement" component={Engagement} />
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
