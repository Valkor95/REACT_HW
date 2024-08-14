import React from "react";
import PropTypes from "prop-types";
import {useSelector, useDispatch} from "react-redux";
import {deleteContact} from "../store/slices/contact.js";
import {Link} from "react-router-dom";
import {Button, List, ListItem, ListItemText} from "@mui/material";
import cn from 'classnames';


const ContactList = () => {
    const contacts = useSelector((state) => state.contacts.contacts);

    return (
        <div>

        </div>
    );
};

export default ContactList;
