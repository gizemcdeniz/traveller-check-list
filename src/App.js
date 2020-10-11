import React from "react";
import "./App.css";
import Login from "./components/Login.js";
import Input from "./components/Input.js";
// import TravelCard from "./components/TravelCard.js";
import TravelCards from "./container/travelCards/TravelCards";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from "react-bootstrap";

export default function App() {
  return (
    
      <div className="App">
        <Router>
          <div>
            <Navbar variant="dark">
                  <Nav.Link>
                    <Link to="/login">Login</Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link to="/travelcard">TravelCard</Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link to="/home">Home</Link>
                  </Nav.Link>
                </Navbar>
            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
              
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/travelcard">
                <TravelCards />
              </Route>
              <Route path="/home">
                <Input />
              </Route>
            </Switch>
          </div>
        </Router>
        );
      </div>
    
  );
}
