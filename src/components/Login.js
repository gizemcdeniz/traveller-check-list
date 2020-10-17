import React from 'react'
import { Container, Form } from 'react-bootstrap';
import { Button, Row } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import "./Login.css";
// import Image from './imagess.png';
import 'bootstrap/dist/css/bootstrap.min.css'

 function Login() {

    const history = useHistory();
    const routeChange = () => {
      let path = "/home"
      history.push(path)

    }


    return (
        <div >
            <Container >
             <form onSubmit={routeChange}>
            <Row>
            <Form>
            {/* <img className="image" src={Image}/> */}
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                </Row>
                </form>
                </Container>
         </div>

    )
}

export default Login;