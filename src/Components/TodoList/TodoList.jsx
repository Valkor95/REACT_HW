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

    handleSubmit = (todoItem) => {
        this.setState({data: [...this.state.data, todoItem]})
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
                            <Row>
                                {this.state.data.map(({title, description}, index) =>{
                                    return (
                                            <Col key={title + '' + index}
                                                 data-id={title + '' + index}
                                                 xs={4}
                                                 className='mb-2'
                                            >
                                                <TodoItem title={title} body={description}/>
                                            </Col>
                                        )
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

TodoList.propTypes = {};

export default TodoList;