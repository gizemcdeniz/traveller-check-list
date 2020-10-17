import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import "./Navbar.css";

function NavSection() {

    let history = useHistory();
    const routeChange = () => {
      let path = "/home"
      history.push(path)
     
    }
    return (
        <div>
            <Navbar>
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
                  <Nav.Link>
                  <Link to="/login">Logut</Link>
                  </Nav.Link>
                </Navbar>
        </div>
    )
}

export default NavSection;