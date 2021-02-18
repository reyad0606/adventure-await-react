import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
