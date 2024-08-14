import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

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

    return (
        <div>

        </div>
    );
};

export default ContactForm;