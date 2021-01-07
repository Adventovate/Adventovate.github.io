import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Products from './components/pages/Products';
import Policy from './components/pages/Policy';
import Video from './components/pages/Video';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/about' component={About} />
          <Route path='/products' component={Products} />
          <Route path='/policy' component={Policy} />
          <Route path='/video' component={Video} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
