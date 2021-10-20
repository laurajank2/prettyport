import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import ContactMe from './pages/contactme';

function App() {
  return (
    <Router>
     <Navbar />
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/about" component={About} />
       <Route path="/contact-me" component={ContactMe} />
     </Switch>
    </Router>
  );
}

export default App;
