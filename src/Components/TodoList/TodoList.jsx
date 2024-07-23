import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PropTypes from 'prop-types';

class TodoList extends Component {
    render() {
        return (
            <div className="todo-list">
                <div className='text-center'>
                    <h1>Todo List</h1>
                </div>
                <Container>
                    <Row>
                        <Col xs={6}>

                        </Col>
                        <Col xs={6}>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

TodoList.propTypes = {};

export default TodoList;