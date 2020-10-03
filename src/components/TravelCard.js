import React from 'react'
import Card from 'react-bootstrap/Card'


export default function TravelCard(props) {
    console.log(props)
    const style = {
        width: '18rem',
        margin: '2em'
    }
    return (
        <div>
            <Card
                bg = "primary"
                text = "white"
                style={style}
                className="mb-2"
            >
                <Card.Header>{props.date} {props.weather}</Card.Header>
                <Card.Body>
                <Card.Title>{props.destination} </Card.Title>
                <Card.Text>
                    {props.items}
                </Card.Text>
                </Card.Body>
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
    )
}
