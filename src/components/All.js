import React from 'react'
import NavSection from './Navbar.js';
import About from "./About"
import TravelCard from "./TravelCard.js"
import Input from "./Input.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";


 function All() {
    return (
        <div>
              <Container>
                 
      <div className="App">
        <Router>
        <NavSection/>
          <div>
           
            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
         
              <Route path="/travelcard">
                <TravelCard/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/home">
                <Input />
              </Route>
         
          </div>
        </Router>
     
      </div>
      </Container>
  );
        </div>
    )
}

export default All;
