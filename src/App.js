import React from "react";
import "./App.css";
import Login from "./components/Login.js";
import Input from "./components/Input.js";
import AuthProvider from "./components/Auth"
import TravelCard from "./components/TravelCard.js"
import SignIn from "./components/SignIn"
import About from "./components/About"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from "react-bootstrap";

export default function App() {
  return (
    <Container>
      <div className="App">
        <Router>
          <div>
            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
         
              <Route path="/login">
                <SignIn/>
                <AuthProvider/>
                </Route>
              <Route path="/travelcard">
                <TravelCard/>
              </Route>
              <Route path="/home">
                <Input />
              </Route>
         
              <Route path="/about">
                <About />
              </Route>
          </div>
        </Router>
     
      </div>
      </Container>
  );
}
