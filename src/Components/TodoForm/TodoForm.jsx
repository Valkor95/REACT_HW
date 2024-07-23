import React, {Component} from 'react';
import {Form} from "react-bootstrap";

class TodoForm extends Component {
    render() {
        return (
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter todo item title" />
                </Form.Group>
            </Form>
        );
    }
}

export default TodoForm;