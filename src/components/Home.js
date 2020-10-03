import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./Form.css";
import TravelCard from "./TravelCard";
import React, { useState, useEffect } from 'react'
import db from '../fireStoreData'

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
    const [trip, setTrip] = useState([]);

    const fetchData = async () => {
        const res = await db.collection('demo').doc('demoItem').get()
        const data = res.data()
        /* console.log(data.title); */
        setDemoItem(data.title);
        const travelRes = await db.collection('trips').get()
        const travelData = travelRes.docs.map(trip => trip.data())
        /* console.log(travelData); */
        setTrip(travelData);
    }
    const clearCard = e => {
      e.preventDefault()
      setDestination("")
      setDate("")
      setWeather("")
      setTrip([])
    }

    const addTravel = e => {
      e.preventDefault()
      db.collection('trips').add({
        destination: destination,
        date: date,
        weather: weather,
        items: items,
      })
      setDestination("")
      setDate("")
      setWeather("")
      setItems("")
    }

    useEffect(()=>{
        fetchData()
      },[destination])

  return (
    <div className="App">
      <Container fluid>
      <h1>{demoItem}</h1>
      <form onSubmit={addTravel}>
        <Form className="form">
          <Form.Group controlId="formDestination">
            <Form.Label>Destination</Form.Label>
            <Form.Control onChange={e => setDestination(e.target.value)} value={destination} type="text" placeholder="Enter Destination" />
          </Form.Group>

          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control onChange={e => setDate(e.target.value)} value={date} type="text" placeholder="Enter Date" />
          </Form.Group>

          <Form.Group controlId="formWeather">
            <Form.Label>Weather</Form.Label>
            <Form.Control onChange={e => setWeather(e.target.value)} value={weather} type="text" placeholder="Enter Weather" />
          </Form.Group>

          <Form.Group controlId="formItems">
            <Form.Label>Items</Form.Label>
            <Form.Control onChange={e => setItems(e.target.value)} value={items} type="text" placeholder="Enter Items" />
          </Form.Group>
        </Form>
        <Button variant="primary" type="submit" active>
            Submit
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
                  items={trip.items}
                  clearList={clearCard}
                />
              );
            })}
        </Row>
    </div>
  );
}
export default Home;
