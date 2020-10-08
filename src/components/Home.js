import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./Form.css";
import TravelCard from "./TravelCard";
import React, { useState, useEffect } from 'react'
import db from '../fireStoreData'
import Item from './Item'


function Home() {
  /* const [isVisible, setIsVisible] = React.useState(false);

 const onClickEvent = (e) => { 
  console.log(isVisible)
    setIsVisible(
      !isVisible
    )
  } */
    const [demoItem, setDemoItem] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    const [weather, setWeather] = useState("");
    const [items, setItems] = useState("");
    // This is the list of trips from Firebase.
    const [trip, setTrip] = useState([]);

    const [traveller, setTraveller] = useState("");
    const [travelitems, setTravelitems] = useState([]);
    const fetchData = async () => {
        const res = await db.collection('demo').doc('demoItem').get()
        const data = res.data()
        /* console.log(data.title); */
        setDemoItem(data.title);
        const travelRes = await db.collection('trips').get()
        /*
        trip => trip.data() (what you're doing right now)
        trip=> trip.id (gets the id of the trip so you can delete it)
        trip => trip.data() (gets the "main data" of the trip)
        .map(trip => {
          return {
            id: trip.id,
            ...trip.data(),
          }
        })
        */
        const travelData = travelRes.docs.map(trip => trip.data())
        console.log(travelData)
        const travelId = travelRes.docs.map(trip => trip.id)
        console.log(travelId)
        const travelIt = await db.collection('travelitems').get()
        const travelItems = travelIt.docs.map(travelitems => travelitems.data())
        //console.log(travelItems);
        // console.log(travelData);
       // console.log(travelIt.docs)
        setTrip(travelData);
        setTravelitems(travelItems);

    }
    const clearCard = e => {
      e.preventDefault()
      setDestination("")
      setDate("")
      setWeather(0)
      // You need to delete the specific item, not all of the items.
      // You don't want to do this way, you want to do onSnapshot.
      setTrip([])
      setTraveller([])
    }

    const addTravel = e => {
      e.preventDefault()
      db.collection('trips').add({
        destination: destination,
        date: date,
        weather: weather,
        items: items,
        traveller: traveller,
        travelitems: travelitems
      })

      setDestination("")
      setDate("")
      setWeather(0)
      setItems("")
      setTraveller()
    }

    useEffect(()=>{
        fetchData()
      },[destination])

  return (
    <div className="App">
      <Container fluid>
        <Item/>
      <h1>{demoItem}</h1>
      <h4>What to pack? what should you prepare before you travel?</h4>
      <form onSubmit={addTravel}>
        <Form className="form">
        <Form.Group controlId="formDestination">
            <Form.Label>Who's Travelling?</Form.Label>
            <Form.Control as="select" defaultValue="Choose..." onChange={e => setTraveller(e.target.value)} value={traveller}>
              <option value="0">Choose...</option>
              <option value="Single/Male">Single/Male</option>
               <option value="Single/Female">Single/Female</option>
               <option value="Couple">Couple</option>
               <option value="Family(with kids)">Family(with kids)</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formDestination">
            <Form.Label>Destination</Form.Label>
            <Form.Control as="select" defaultValue="Choose..." onChange={e => setDestination(e.target.value)} value={destination}>
              <option value="0">Choose...</option>
              <option value="Europe">Europe</option>
               <option value="Africa">Africa</option>
               <option value="America">America</option>
               <option value="Asia">Asia</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formDate">
            <Form.Label>Accommodation:</Form.Label>
            <Form.Control onChange={e => setDate(e.target.value)} value={date} type="text" placeholder="Enter Date" />
          </Form.Group>

          <Form.Group controlId="formGridState">
            <Form.Label>Expected Weather</Form.Label>
            <Form.Control as="select" defaultValue="Choose..." onChange={e => setWeather(e.target.value)} value={weather}>
              <option value="0">Choose...</option>
              <option value="Hot Sunny">Hot/Sunny</option>
               <option value="Cold Rainy">Cold / Rainy</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formItems">
            <Form.Label>Items</Form.Label>
            <Form.Control onChange={e => setItems(e.target.value)} value={items} type="text" placeholder="Enter Items" />
          </Form.Group>
        </Form>
        <Button variant="primary" type="submit" active>
            Create My Checklist
        </Button>
      </form>
      </Container>
      <Row>
            {trip.map((trip) => {
              return ( 
                <TravelCard 
                  destination={trip.destination}
                  date={trip.date}
                  weather={trip.weather}
                  traveller={trip.traveller}
                  items={trip.items}
                  option ={trip.option}
                  travelitems={travelitems[0] ? travelitems[0].item.join(" ") : null}
                  clearList={clearCard}
                />
              );
            })}
        </Row>
    </div>
  );
}
export default Home;
