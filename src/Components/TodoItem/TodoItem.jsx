import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card} from "react-bootstrap";

class TodoItem extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {title, body} = this.props

        return (
            <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {body}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

TodoItem.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

export default TodoItem;