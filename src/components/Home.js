import React, { Component, useState } from "react";
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Board from "./Board"


function Home() {
  const [isVisible, setIsVisible] = React.useState(false);



 const onClickEvent = (e) => { 
  console.log(isVisible)
    setIsVisible(
      !isVisible
    )
  }


  return (
    <div className="App">
        <Container fluid>
      <h1>Home Page</h1>
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Who is traveller?</Form.Label>
                    <Form.Control as="select">
                    <option>Single (Female)</option>
                    <option>Single (Male)</option>
                    <option>Couple</option>
                    <option>Family (with child)</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control as="select">
                    <option>Europe</option>
                    <option>Africa</option>
                    <option>Asia</option>
                    <option>America</option>
                    <option>Australia</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Accommodation</Form.Label>
                    <Form.Control as="select">
                    <option>Hotel</option>
                    <option>Hostel</option>
                    <option>Camping</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Expected Weather</Form.Label>
                    <Form.Control as="select">
                    <option>Sunny</option>
                    <option>Rainy</option>
                    <option>Snowy</option>
                    </Form.Control>
                </Form.Group>
        </Form>
      <Button onClick={(e) => onClickEvent(e)} variant="secondary" size="lg" active>
        Create Travel List
      </Button>
      </Container>
      {isVisible ? (<Board />) : ("") } 
    </div>
  );
}

export default Home;
