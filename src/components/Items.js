import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import db from "../fireStoreData";

function Items() {
  const [items, setItems] = useState([]);

  // const fetchData = async () => {
  //   await db.collection('trips').onSnapshot((snapshot) => {
  //     snapshot.docChanges().forEach((change) => {
  //       if (change.type === "added") {
  //         console.log(change.doc.id);
  //         setItems((prevState) => [...prevState, change.doc.data().travelitems])
  //       }
  //     })
  //   })
  // }

  const fetchData = async ()=>{
    const res = await db.collection('defaultitems').get();
    //console.log(res);
   const itemsData = res.docs.map(items => items.data())
   console.log(itemsData)
 
    // const usersRes = await db.collection('users').get() 
    // console.log(usersRes);
    // const usersData = usersRes.docs.map(user => user.data())
    // console.log(usersData);
    setItems(itemsData)
  

  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
      {items.forEach((items) => (
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
          {items}
        </Form.Group>
      ))}
    </div>
  );
}

export default Items;
