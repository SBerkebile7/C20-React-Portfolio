import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer'
import ContactForm from './components/Contact';

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={ContactForm} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;