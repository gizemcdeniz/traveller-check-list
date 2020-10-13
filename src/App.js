import React from "react";
import "./App.css";
import Login from "./components/Login.js";
import Input from "./components/Input.js";
// import TravelCard from "./components/TravelCard.js";
import TravelCards from "./container/travelCards/TravelCards";
import Toast from "./components/Toast.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

export default function App() {
  return (
    <Container>
      <div className="App">
        <Router>
          <div>
           <Navbar  bg="light" variant="light">
                  <Nav.Link>
                  <FontAwesomeIcon icon={ faHome} />  <Link to="/home">Home</Link>
                  </Nav.Link>

                  <Nav.Link>
                  <FontAwesomeIcon icon={ faSuitcase} />  <Link to="/travelcard">TravelCard</Link>
                  </Nav.Link>
                  <Nav.Link>
                  <FontAwesomeIcon icon={ faUsers} />  <Link to="/about">About</Link>
                  </Nav.Link>

                  <Nav.Link>
                  <Link to="/login">Login</Link>
                  </Nav.Link>
                </Navbar>
            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
              
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/travelcard">
                <Toast/>
              </Route>
              <Route path="/home">
                <Input />
              </Route>
            </Switch>
          </div>
        </Router>
     
      </div>
      </Container>
  );
}
