import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/layouts/Header';
import Navigation from './components/layouts/Navigation';
import Footer from './components/layouts/Footer';
import Index from './components/pages/Index';
import About from './components/pages/About';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Navigation />
          <main className="main">
            <Switch>
              <Route path="/about" exact component={ About } />
              <Route path="/" component={ Index } />
            </Switch>
          </main>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
