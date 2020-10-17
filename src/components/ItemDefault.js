import Form from "react-bootstrap/Form";
import Icon from '@material-ui/core/Icon';
import {Row, Col} from 'react-bootstrap'
import React, { useState, useEffect } from 'react';



export default function ItemDefault(props) {
    

    return (
        <div>
         <Row>
            <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" defaultChecked={true} label={props.value} />
            </Form.Group>
         </Row>
        </div>
    )
}