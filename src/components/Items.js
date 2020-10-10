import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import db from "../fireStoreData";

function Items(props) {
  console.log(props);
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    await db.collection('trips').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log(change.doc.id);
          setItems((prevState) => [...prevState, change.doc.data().travelitems])
        }
      })
    })
  }

  return (
    <div>
      {props.items.map((item) => (
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
          {item}
        </Form.Group>
      ))}
    </div>
  );
}

export default Items;
