import React from 'react'
import Form from "react-bootstrap/Form";
import Icon from '@material-ui/core/Icon';
import {Row, Col} from 'react-bootstrap'

export default function ItemAdded(props) {
    console.log(props)
    return (
        <div>
         <Row>
            <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label={props.value} />
            <Icon color="primary">edit</Icon>
            <Icon color="primary">delete</Icon>
            </Form.Group>
         </Row>
        </div>
    )
}