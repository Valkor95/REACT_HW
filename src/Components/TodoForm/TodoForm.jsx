import React, {Component, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import PropTypes from "prop-types";


const TodoForm = ({onSubmit}) => {
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    });
    const [isLoading, setIsLoading] = useState('false')

    const handleChange = ({target}) => {
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        for (const key in formData){
            if (formData[key].trim() === ''){
                return alert(`Empty ${key}`)
            }
        }

        onSubmit({...formData})
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="todoItemTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    name='title'
                    type="text"
                    placeholder="Enter todo item title"
                    onChange={handleChange}
                    value={formData.title}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="todoItemDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    name='description'
                    as='textarea'
                    type="text"
                    placeholder="Enter todo item description"
                    onChange={handleChange}
                    value={formData.description}
                />
            </Form.Group>
            <Button type='Submit'>Submit</Button>
        </Form>
    );
};

TodoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default TodoForm;