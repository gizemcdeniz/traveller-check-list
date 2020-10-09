import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Items from "./Items";

export default function TravelCard(props) {
  // console.log(props)
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
        {/* <Card.Header> {props.destination}</Card.Header>
        <Card.Body>
          <Card.Title>{props.traveller} </Card.Title>
          <Card.Title>{props.travelitems} </Card.Title>

          <Card.Text>{props.items}</Card.Text>
          <Card.Text>{props.option}</Card.Text>
        </Card.Body>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" id="checkbox" />
          {props.travelitems}
        </Form.Group> */}

        <button
          type="button"
          className="btn btn-danger text-uppercase mt-5"
          onClick={props.clearList}
        >
          Delete List
        </button>
      </Card>
      <br />
    </div>
  );
}
