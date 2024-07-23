import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TodoForm from "../TodoForm";
import TodoItem from "../TodoItem";
import PropTypes from 'prop-types';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    handleSubmit = (data) => {
        console.log(data)
    }
    render() {
        return (
            <div className="todo-list">
                <div className='text-center'>
                    <h1>Todo List</h1>
                </div>
                <Container>
                    <Row>
                        <Col xs={6}>
                            <TodoForm onSubmit={this.handleSubmit}/>
                        </Col>
                        <Col xs={6}>
                            <TodoItem/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

TodoList.propTypes = {};

export default TodoList;