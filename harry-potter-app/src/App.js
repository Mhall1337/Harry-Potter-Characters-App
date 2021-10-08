
import './App.css';
import Characters from './Components/Characters';
import FavoritesList from './Components/FavoritesList';
import React from 'react';
import { Route } from 'react-router';
import NavBar from './Components/NavBar';
import Home from './Components/Home'


function App() {
  return (
    <div>
      <NavBar />
      <Route exact path="/characters">
        <Characters />
      </Route>
      <Route exact path="/favorites">
        <FavoritesList />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
}

export default App;
