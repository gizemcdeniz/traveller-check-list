import React from 'react';
import db from '../fireStoreData';

function Item() {

    const fetchData = async () => {
        const travelIt = await db.collection('travelitems').get()
        // console.log(travelIt)
        // const data = travelIt.data();
        travelIt.forEach(travel => console.log(travel.data()))
    //     console.log(data)
    //     const travelItems = data.docs.map(travelitems => travelitems.data())
    //    console.log(travelItems)

    }

    fetchData();
    return (

        <div>
            
        </div>
    )
}

export default Item;
