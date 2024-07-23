import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Form>
                <Form.Group className="mb-3" controlId="todoItemTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        name='title'
                        type="text"
                        placeholder="Enter todo item title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="todoItemDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        name='description'
                        as='textarea'
                        type="text"
                        placeholder="Enter todo item description" />
                </Form.Group>
                <Button type='Submit'>Submit</Button>
            </Form>
        );
    }
}

export default TodoForm;