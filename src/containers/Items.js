import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import db from "../fireStoreData";
import ItemDefault from "../components/ItemDefault"
import Button from 'react-bootstrap/Button'
import {Row, Col} from 'react-bootstrap'

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
    //console.log("hello");
    const res = await db.collection('defaultitems').get();
    //console.log(res);
   const itemsData = res.docs.map(items => items.data())
   //console.log(itemsData)
    // const usersRes = await db.collection('users').get() 
    // console.log(usersRes);
    // const usersData = usersRes.docs.map(user => user.data())
    // console.log(usersData);
    setItems(itemsData)
  }
  useEffect(()=>{
    fetchData()
  },[])
  console.log(items)
  return (
    <div>
      {
        items.map(item=><ItemDefault value={item.item}/>)
      }
      <Button variant="primary">Add New Item</Button>
    </div>
  );
}

export default Items;
