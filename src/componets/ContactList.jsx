import React from "react";
import PropTypes from "prop-types";
import {useSelector, useDispatch} from "react-redux";
import {deleteContact} from "../store/slices/contact.js";
import {Link} from "react-router-dom";
import {Button, List, ListItem, ListItemText} from "@mui/material";
import cn from 'classnames';


const ContactList = () => {
    const contacts = useSelector((state) => state.contacts.contacts);
    const dispatch = useDispatch();

    return (
        <List>
            {contacts.map((contact) => (
                <ListItem key={contact.id} className={cn('contact-item')}>
                    <ListItemText primary={contact.name} secondary={contact.email}/>
                    <Link to={`/edit/${contact.id}`}>
                        <Button variant>Edit</Button>
                    </Link>
                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => dispatch(deleteContact(contact.id))}
                    >
                        Delete
                    </Button>
                </ListItem>
            ))}
        </List>
    );
};

export default ContactList;
