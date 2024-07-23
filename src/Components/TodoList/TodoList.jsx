import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PropTypes from 'prop-types';

class TodoList extends Component {
    render() {
        return (
            <div className="todo-list">
                <Container>
                    <Row>
                        <Col xs={6}>Lorem ipsum dolor sit amet.</Col>
                        <Col xs={6}>Lorem ipsum dolor sit amet.</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

TodoList.propTypes = {};

export default TodoList;