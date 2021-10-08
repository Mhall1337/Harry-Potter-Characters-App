
import './App.css';
import Characters from './Components/Characters';
import FavoritesList from './Components/FavoritesList';
import React from 'react';
import { Route } from 'react-router';
import NavBar from './Components/NavBar';


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
    </div>
  );
}

export default App;
