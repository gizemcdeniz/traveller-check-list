import {Toast} from 'react-bootstrap';
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
   console.log(usersData)
 
    // const usersRes = await db.collection('users').get() 
    // console.log(usersRes);
    // const usersData = usersRes.docs.map(user => user.data())
    // console.log(usersData);
   setformTrip(usersData)
   console.log(formTrip)

  }

   useEffect(()=>{
        fetchData()
      },[])

  return (
    <div>
      {formTrip.map((trip) => (
            <>
            <Toast>
                <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Traveller Details</strong>
                {/* <small>just now</small> */}
                </Toast.Header>
                <Toast.Body>Traveller: {trip.traveller}</Toast.Body>
                <Toast.Body>Destination: {trip.destination}</Toast.Body>
                <Toast.Body>Accommodation: {trip.accommodation}</Toast.Body>
                <Toast.Body>Weather: {trip.weather}</Toast.Body>
            </Toast>
            </>
      ))}
    </div>
  );
}