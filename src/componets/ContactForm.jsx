import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addContact, updateContact} from "../store/slices/contact.js";
import {useNavigate, useParams} from "react-router-dom";
import {TextField, Button} from "@mui/material";
import PropTypes from "prop-types";

const ContactForm = () => {
    const [contact, setContact] = useState({name: '', email: ''});
    const contacts = useSelector((state) => state.contacts.contacts);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        if (id){
            const existingContact = contacts.find(contact => contact.id === parseInt(id));
            if (existingContact){
                setContact(existingContact);
            }
        }
    }, [id, contacts]);

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id){
            dispatch(updateContact(contact));
        } else {
            dispatch(addContact({...contact, id:Date.now()}));
        }
        navigate('/')
    }

    return (
       <form>
           <TextField
                label='Email'
                name='email'
                value={contact.email}
                onChange={handleChange}
                fullWidth
                margin='normal'
           />
           <TextField
                label='Name'
                name='name'
                value={contact.name}
                onChange={handleChange}
                fullWidth
                margin='normal'
           />
            <Button variant='contained' color='primary' type='submit'>
                {id ? 'Update Contact' : 'Add Contact'}
            </Button>
       </form>
    );
};

ContactForm.propTypes = {
    contacts: PropTypes.array.isRequired,
}

export default ContactForm;