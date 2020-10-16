import React from 'react'
import Form from "react-bootstrap/Form";
import Icon from '@material-ui/core/Icon';
import {Row, Col} from 'react-bootstrap'

export default function ItemDefault(props) {
    
    return (
        <div>
         <Row>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label={props.value} />
            </Form.Group>
         </Row>
        </div>
    )
}