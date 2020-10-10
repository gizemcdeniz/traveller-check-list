
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Items from "./Items";
import Row from 'react-bootstrap/Row';
import db from "../fireStoreData";
import React, { useState, useEffect } from 'react'


export default function TravelCard(props) {
  console.log(props.items)
  console.log(props)
  //console.log(props.travelitems)
  const style = {
    width: "18rem",
    margin: "2em",
  };
  console.log(props.travelitems);
  console.log(props.taveller);



  return (
    <div>
      <Card bg="primary" text="white" style={style} className="mb-2">
        <Items items={props.items} />
        <Card.Header> {props.destination}</Card.Header>
        <Card.Body>
          <Card.Title>{props.traveller} </Card.Title>
          <Card.Title>{props.travelitems} </Card.Title>

          <Card.Text>{props.items}</Card.Text>
          <Card.Text>{props.option}</Card.Text>
          <Row>
            <button
            type="button"
            className="btn btn-danger text-uppercase mt-5"
            onClick={props.clearList}
            >
            Delete List
            </button>
            <button
            type="button"
            className="btn btn-danger text-uppercase mt-5"
            >
            Edit
            </button>
        </Row>
        </Card.Body>
        
      </Card>
      <br />
    </div>
  );
}
