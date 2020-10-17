import {Toast, Row} from 'react-bootstrap';
import db from "../fireStoreData";
import React, { useState, useEffect } from 'react'
import Items from '../containers/Items';
import InputGroup from 'react-bootstrap/InputGroup';
import NavSection from './Navbar.js';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default function TravelCard(props) {
  const style = {
    width: "18rem",
    margin: "2em",
  };
   const [formTrip, setformTrip] = useState([]);
   const [resTripData, setResTripData] = useState([]);

   const fetchData = async ()=>{
   const res = await db.collection('usertrip').get();
   const usersData = res.docs.map(trip => {return {...trip.data(),id:trip.id}})
 
   setformTrip(usersData);
   
  }
  console.log(formTrip)
   useEffect(()=>{
        fetchData()
      },[])

  // const deleteCard = e => {
  //   console.log("Hello")
  //   db.collection('usertrip').doc(formTrip.id).delete();

  // }

  console.log(formTrip.id)
  return (
   
    <div>
      {formTrip.map((trip) => (
            <>
         
            <Toast>
                <Toast.Header>
                {/* <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" /> */}
                <strong className="mr-auto">Traveller Details</strong>
                {/* <small>just now</small> */}
                </Toast.Header>
                <Toast.Body>Traveller: {trip.traveller}</Toast.Body>
                <Toast.Body>Destination: {trip.destination}</Toast.Body>
                <Toast.Body>Accommodation: {trip.accommodation}</Toast.Body>
                <Toast.Body>Weather: {trip.weather}</Toast.Body>
                <Toast.Body>Items: <Items tripData={trip} /></Toast.Body>
                <Button type="submit" variant="outline-secondary">Delete Card</Button>
        
            </Toast>
            </>
      ))}
    </div>
  );
}