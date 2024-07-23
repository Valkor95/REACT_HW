import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                title: '',
                description: '',
            },
            isLoading: false
        }
    }

    handleChange = ({target}) => {
        const formData = {
            ...this.state.formData,
            [target.name]: target.value
        }

        console.log(target.name, target.value)
        this.setState({formData})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        for(const key in this.state.formData){
            if(this.state.formData[key].trim() === ''){
                return alert(`Empty ${key}`)
            }
        }


    }
    render() {
        const {title, description} = this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="todoItemTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        name='title'
                        type="text"
                        placeholder="Enter todo item title"
                        onChange={this.handleChange}
                        value={title}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="todoItemDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        name='description'
                        as='textarea'
                        type="text"
                        placeholder="Enter todo item description"
                        onChange={this.handleChange}
                        value={description}
                    />
                </Form.Group>
                <Button type='Submit'>Submit</Button>
            </Form>
        );
    }
}

export default TodoForm;