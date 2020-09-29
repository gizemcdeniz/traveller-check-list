import React from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <div className="App">
        <Container fluid>
      <h1>Home Page</h1>
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Who is traveller?</Form.Label>
                    <Form.Control as="select">
                    <option>Single(Female)</option>
                    <option>Single(Male)</option>
                    <option>Couple</option>
                    <option>Family(with child)</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
        </Form>


      <Button variant="secondary" size="lg" active>
        Create Travel List
      </Button>
      </Container>
    </div>
  );
}

export default Home;
