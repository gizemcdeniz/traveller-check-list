import React, { useState, useEffect } from "react";
import TravelCard from "../../components/TravelCard";
import db from "../../fireStoreData";

export default function TravelCards() {
  const [cards, setCards] = useState([]);
 
  //Fetches all the cards data that we have in the db
  //And assign it to the cards state
  const fetchData = async () => {
    const travelItems = await db.collection("travelitems");
    const snapshot = await travelItems.get();
    await db.collection("travelitems").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log(change.doc.id);
          setCards((prevState) => [...prevState, change.doc.data().item]);
        } else if (change.type === "modified") {
        } else if (change.type === "removed") {
          // change.doc.id === shows the deleted board id
          // !== change.doc.id
          setCards((prevState) => {
            const newCards = [...prevState];
            // write code to filter the card that's removed from the db

            return newCards;
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

  console.log(cards);
  useEffect(() => {
    fetchData();
  }, []);

  // Using the card state we loop through it to create each card
  return (
    <div>
      {cards.map((cardItems) => (
        <TravelCard items={cardItems} />
      ))}
    </div>
  );
}
