import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Items from "./Items";
import Row from 'react-bootstrap/Row';
import db from "../fireStoreData";
import React, { useState, useEffect } from 'react'


export default function TravelCard(props) {
 // console.log(props.items)
  //console.log(props)
  //console.log(props.travelitems)
  const style = {
    width: "18rem",
    margin: "2em",
  };
  //console.log(props.travelitems);
  //console.log(props.taveller);
 

    const [formTrip, setformTrip] = useState([]);

  const fetchData = async ()=>{
    const res = await db.collection('usertrip').get();
    //console.log(res);
   const usersData = res.docs.map(trip => trip.data())
   //console.log(usersData)
 
    // const usersRes = await db.collection('users').get() 
    // console.log(usersRes);
    // const usersData = usersRes.docs.map(user => user.data())
    // console.log(usersData);
   setformTrip(usersData)
   console.log(formTrip)

  }

   useEffect(()=>{
        fetchData()
      },[formTrip])

  return (
    <div>
      {formTrip.map((trip) => (
      <Card bg="primary" text="white" style={style} className="mb-2">
        {/* <Items items={props.items} /> */}
        <Card.Header> {trip.destination}</Card.Header>
        <Card.Body>
          <Card.Title>{trip.accommodation} </Card.Title>
          <Card.Title>{trip.weather} </Card.Title>

          <Card.Text>{trip.traveller}</Card.Text>
          <Card.Text>{trip.traveller}</Card.Text>
          <Row>
            <button
            type="button"
            className="btn btn-danger text-uppercase mt-5"
            onClick={trip.clearList}
            >
            Delete List
            </button>
            <button
            type="button"
            className="btn btn-danger text-uppercase mt-5"
            >
            Edit
            </button>
        </Row>
        </Card.Body>
        
      </Card>
      
      ))}
    </div>
  );
}
