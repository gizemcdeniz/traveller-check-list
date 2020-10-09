import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form'
import db from '../fireStoreData';

function Item(props) {

    /* const fetchData = async () => {
    const response = await db.collection('travelitems').get()
    console.log(response)
    const data = response.data();
    console.log(data) */
       // travelIt.forEach(travel => console.log(travel.data()))  
    //     const travelItems = data.docs.map(travelitems => travelitems.data())
    //    console.log(travelItems)

    const [items , setItems] = useState([]);

    const fetchData = async () => {
        const travelItems = db.collection('travelitems');
        const snapshot = await travelItems.get();
        let itemsArray = [];
        snapshot.forEach(doc => {
        //console.log(doc.id, "=>", doc.data().item)
        itemsArray.push(doc.data().item)
        })
        console.log(itemsArray);
        setItems(itemsArray);
        //setItems(itemsArray)
        
    }
    console.log(items)
    useEffect( () => {
        fetchData()
    }, [])
        

    return (
        <div>
            {items.forEach(item =>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />{item}
                </Form.Group>
                )}
            
        </div>
    )
}

export default Item;
