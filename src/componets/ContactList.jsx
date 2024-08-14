import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {deleteContact} from "../store/slices/contacts.js";
import {Link} from "react-router-dom";
import {Button, List, ListItem, ListItemText, Typography} from "@mui/material";
import cn from 'classnames';
import ContactForm from "./ContactForm.jsx";


const ContactList = () => {
    const contacts = useSelector((state) => state.contacts.contacts);
    const dispatch = useDispatch();

    return (
        <div>
            <ContactForm />
            {contacts.length === 0 ? (
                <Typography variant="h6" gutterBottom>
                    Контактов нет. Добавьте новый контакт.
                </Typography>
        ):(
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
        )}
      </div>
    );
};

export default ContactList;
