import React, {Component, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import PropTypes from "prop-types";


const TodoForm = () => {
    const [formData, setFormData] = useState([{
        title: '',
        description: ''
    }]);
    const [isLoading, setIsLoading] = useState('false')

    const handleChange = ({target}) => {
        const newFormData = {
            ...formData,
            [target.name]: target.value
        }

        setFormData(newFormData)
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

            {/*<Form.Group className="mb-3" controlId="todoItemDescription">*/}
            {/*    <Form.Label>Description</Form.Label>*/}
            {/*    <Form.Control*/}
            {/*        name='description'*/}
            {/*        as='textarea'*/}
            {/*        type="text"*/}
            {/*        placeholder="Enter todo item description"*/}
            {/*        onChange={handleChange}*/}
            {/*        value={formData.description}*/}
            {/*    />*/}
            {/*</Form.Group>*/}
            {/*<Button type='Submit'>Submit</Button>*/}
        </Form>
    );
};

// class TodoForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             formData: {
//                 title: '',
//                 description: '',
//             },
//             isLoading: false
//         }
//     }
//
//     handleChange = ({target}) => {
//         const formData = {
//             ...this.state.formData,
//             [target.name]: target.value
//         }
//
//         this.setState({formData})
//     }
//
//     handleSubmit = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//
//         for(const key in this.state.formData){
//             if(this.state.formData[key].trim() === ''){
//                 return alert(`Empty ${key}`)
//             }
//         }
//
//         this.props.onSubmit({...this.state.formData})
//
//     }
//     render() {
//         const {title, description} = this.state;
//
//         return (
//             <Form onSubmit={this.handleSubmit}>
//                 <Form.Group className="mb-3" controlId="todoItemTitle">
//                     <Form.Label>Title</Form.Label>
//                     <Form.Control
//                         name='title'
//                         type="text"
//                         placeholder="Enter todo item title"
//                         onChange={this.handleChange}
//                         value={title}
//                     />
//                 </Form.Group>
//
//                 <Form.Group className="mb-3" controlId="todoItemDescription">
//                     <Form.Label>Description</Form.Label>
//                     <Form.Control
//                         name='description'
//                         as='textarea'
//                         type="text"
//                         placeholder="Enter todo item description"
//                         onChange={this.handleChange}
//                         value={description}
//                     />
//                 </Form.Group>
//                 <Button type='Submit'>Submit</Button>
//             </Form>
//         );
//     }
// }

TodoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default TodoForm;