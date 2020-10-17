import React, { useState, useEffect } from "react";
import db from "../fireStoreData";
import firebase from "firebase"
import ItemDefault from "../components/ItemDefault"
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import ItemAdded from "../components/ItemAdded";

function Items(props) {
  // create new state that stores the props.tripData.items

  
  console.log(props.tripData.items.map(item => item.name))
  
  
  const [defaultItems, setDefaultItems] = useState([]);

  const [addedItems, setAddedItems] = useState();
  const [trips, setTrips] = useState([]);

  const fetchDefaultItems = async ()=>{
     const res = await db.collection('defaultitems').get();
     const itemsData = res.docs.map(items => {
     const data = items.data()
     const id = items.id
     return { id, ...data}
    })
    setDefaultItems(itemsData)
  }

  const fetchTripData = async ()=>{
    const res = await db.collection('usertrip').get();
    const tripData = res.docs.map(trip => {
      const data = trip.data()
      const id = trip.id
      return { id, ...data}
    })
    setTrips(tripData);
    console.log(tripData);
    console.log(trips)
   }

  useEffect(()=>{
    fetchDefaultItems();
    /* fetchTripData(); */
  },[])

  const refreshPage = () => {
    window.location.reload(false);
  }

  const addNewItem = e => {
    console.log("Hello")
    let newItem = {
      name: `${addedItems}`,
      id: Date.now(),
    }
    console.log(addedItems)
    console.log(newItem)

    db.collection('usertrip').doc(props.tripData.id).update({
      items:firebase.firestore.FieldValue.arrayUnion(newItem)}
      )
      //whenever you add a new item make sure to add it to the state too inorder to have live update
    /* setAddedItems(newItem)
    console.log(props.tripData.items) */
  }
  
  return (
    <div>
      {
        defaultItems.map(item=><ItemDefault value={item.item}/>)
      }
      {
        // props.tripData.items.map(item => <h1>item</h1>)
        props.tripData.items.map(item =><ItemAdded value={item.name}/>)
      }
      <form onClick={addNewItem} >
      <InputGroup  className="mb-3">
        <FormControl
          onChange={e=> setAddedItems(e.target.value)}
          placeholder="Add New Item"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button type="submit" onClick={refreshPage} variant="outline-secondary">Add Item</Button>
        </InputGroup.Append>
        <InputGroup.Append>
          {/* <Button type="submit" onClick={deleteCard} variant="outline-secondary">Delete Card</Button> */}
        </InputGroup.Append>
      </InputGroup>
      </form>
    </div>
  );
}

export default Items;
