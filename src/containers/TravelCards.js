import React, { useState, useEffect } from "react";
import TravelCard from "../components/TravelCard";
import db from "../fireStoreData";
import {Row, Col, Container} from 'react-bootstrap'
import NavSection from './Navbar.js';
import NavSection from './components/Navbar.js';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"


export default function TravelCards() {
  const [cards, setCards] = useState([]);
 
  //Fetches all the cards data that we have in the db
  //And assign it to the cards state
  const fetchData = async () => {
    
    await db.collection("usertrip").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {

        if (change.type === "added") {
          console.log(change.doc.id);
          setCards((prevState) => [...prevState, {...change.doc.data().items,id:change.doc.id}]);
        } 
        
        else if (change.type === "modified") {
          console.log(change.doc.data(), "=>", change.doc.id);
          setCards((prevCards) => {
            const newArrayCards = [...prevCards];
            let index = newArrayCards.findIndex((el) => el.id === change.doc.id);
            console.log(index);
            if (index !== -1) {
              newArrayCards[index] = {
                ...change.doc.data(),
                id: change.doc.id,
              }
            }
            return newArrayCards;
          })
        } 
        
        else if (change.type === "removed") {
          // change.doc.id === shows the deleted board id
          // !== change.doc.id
          setCards((prevCards) => {
            const newArrayCards = [...prevCards];
            // write code to filter the card that's removed from the db
            let index = newArrayCards.findIndex((el) => el.id === change.doc.id);
            if (index !== -1) {
              newArrayCards.splice(index, 1);
              console.log(newArrayCards);
            }
            return newArrayCards;
          });
        }
        console.log(change.type, change.doc.data());
      });
    });

    // let itemsArray = [];
    // snapshot.forEach((doc) => {
    //   //console.log(doc.id, "=>", doc.data().item)
    //   itemsArray.push(doc.data().item);
    // });
    // console.log(itemsArray);
    // setCards(itemsArray);
    //setItems(itemsArray)
  };

  console.log(cards)
  useEffect(() => {
    fetchData();
  }, []);
  
  // Using the card state we loop through it to create each card
  return (
   <div>
     <NavSection/>
    <Row>
    <div>
      {cards.map((cardItems) => (
        <TravelCard {...cardItems} />
      ))}
    </div>
    </Row>
    </div>
  );
}
