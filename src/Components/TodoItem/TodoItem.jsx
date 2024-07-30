import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card} from "react-bootstrap";

const TodoItem = ({title, body}) => {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {body}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

TodoItem.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

export default TodoItem;