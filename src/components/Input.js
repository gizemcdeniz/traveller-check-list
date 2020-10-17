import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Container, Row, Col} from 'react-bootstrap';
import "./Form.css";
import React, { useState, useEffect } from 'react';
import db from '../fireStoreData';
import { useHistory } from "react-router-dom";
// import Image from '../image.png';
import NavSection from './Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css'



function Input() {
  const [formDestination, setformDestination] = useState("");
  const [formAccom, setformAccom] = useState("");
  const [formWeather, setformWeather] = useState("");
  // This is the list of trips from Firebase.
  const [formTraveller, setformTraveller] = useState("");
    //Adding Function//
    const addCard = e => {
      db.collection('usertrip').add({
        destination: formDestination,
        accommodation: formAccom,
        weather: formWeather,
        traveller: formTraveller,
        items: [],
      })
      setformDestination("")
      setformWeather("")
      setformTraveller("")
      setformAccom("")

    }

   

    //Redirecting page
    let history = useHistory();
    const routeChange = () => {
      let path = "/travelcard"
      history.push(path)
      addCard();
    }

    // const clearCard = e => {
    //   e.preventDefault()
    //   setDestination("")
    //   setWeather(0)
    //   // You need to delete the specific item, not all of the items.
    //   // You don't want to do this way, you want to do onSnapshot.
    //   setTrip([])
    //   setTraveller([])
    // }

    /* useEffect(()=>{
        fetchData()
      },[destination]) */

  return (

    <div className="App">
      <NavSection/>
    <Col>
     
      <h4>What to pack? what should you prepare before you travel?</h4>
      <Row className="d-flex justify-content-between">
      <form onSubmit={routeChange}>
        <Form className="form">
        <Form.Group controlId="formDestination">
            <Form.Label>Who's Travelling?</Form.Label>
            <Form.Control as="select" defaultValue="Choose..." onChange={e => setformTraveller(e.target.value)} value={formTraveller}>
              <option value="0">Choose...</option>
              <option value="Single/Male">Single/Male</option>
               <option value="Single/Female">Single/Female</option>
               <option value="Couple">Couple</option>
               <option value="Family(with kids)">Family(with kids)</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formDestination">
            <Form.Label>Destination</Form.Label>
            <Form.Control as="select" defaultValue="Choose..." onChange={e => setformDestination(e.target.value)} value={formDestination}>
              <option value="0">Choose...</option>
              <option value="Europe">Europe</option>
               <option value="Africa">Africa</option>
               <option value="America">America</option>
               <option value="Asia">Asia</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formAccom">
            <Form.Label>Accommodation</Form.Label>
            <Form.Control as="select" defaultValue="Choose..." onChange={e => setformAccom(e.target.value)} value={formAccom}>
              <option value="0">Choose...</option>
              <option value="Hotel">Hotel</option>
               <option value="Hostel">Hostel</option>
               <option value="Camping">Camping</option>
            </Form.Control>
          </Form.Group>


          <Form.Group controlId="formGridState">
            <Form.Label>Expected Weather</Form.Label>
            <Form.Control as="select" defaultValue="Choose..." onChange={e => setformWeather(e.target.value)} value={formWeather}>
              <option value="0">Choose...</option>
              <option value="Hot Sunny">Hot/Sunny</option>
               <option value="Cold Rainy">Cold / Rainy</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Button variant="primary" type="submit" active>
            Create My Checklist
        </Button>
      </form>
      {/* <img className="image" src={Image}/> */}
      </Row>
      </Col>
    </div>
  );
}
export default Input;
