import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Movies from './pages/Movies';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import Navigation from './Navigation';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation />
        <Switch>
          <Route path="/nav" component={Navigation} />
          <Route path="/movies" component={Movies} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/profile" component={Profile} />
          
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;