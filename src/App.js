import React from 'react';
import './App.css';
import Home from "./components/Home.js";
import db from './fireStoreData.js';
import Login from './components/Login.js'
import TravelCard from './components/TravelCard.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/travelcard">TravelCard</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/travelcard">
            <TravelCard />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
   </Router>
  );

    </div>
  );
}

export default App;
