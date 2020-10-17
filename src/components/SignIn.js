import React, { useState } from "react";
import * as firebase from 'firebase';
import {Form, Button, Alert} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { faBullseye } from "@fortawesome/free-solid-svg-icons";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerInfo, setRegisterInfo] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");



  const register = (e) => {
    setErrorMessage(null)
    e.preventDefault()
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setRegisterInfo(true)
      })
      .catch((err) => {
         setRegisterInfo(false)
         setErrorMessage(err.message)
        console.error(err);
      });
  };

  const login = (e) => {
      e.preventDefault()
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        routeChange();
        console.log("hi")
      })
      .catch((err) => {
        console.error(err);
      });
      
  };

  const logOut = () => {
    firebase.auth().signOut();
  };

  const resetInput = () => {
    setEmail("");
    setPassword("");
  };

  let history = useHistory();
  const routeChange = () => {
    let path = "/home"
    history.push(path)
   
  }
  return (
    <> 
        <Form>
        {registerInfo ? (<Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Now, Login and begin to prepare your suitcase!
        </p>
      </Alert> ) : null}
      {!registerInfo && errorMessage ? (<Alert variant="danger">
        <Alert.Heading>Hey, BUT!</Alert.Heading>
        <p>
          {errorMessage}
        </p>
      </Alert> ) : null}
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"value={email}
          onChange={(e) => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={register}>
            Register
        </Button>
        <Button variant="primary" type="submit" onClick={login}>
            Login
        </Button>
        </Form>
    
    </>
  );
};

export default SignIn;