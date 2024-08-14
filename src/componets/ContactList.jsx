import React from "react";
import PropTypes from "prop-types";
import {useSelector, useDispatch} from "react-redux";
import {deleteContact} from "../store/slices/contact.js";
import {Link} from "react-router-dom";
import {Button, List, ListItem, ListItemText} from "@mui/material";
import cn from 'classnames';

class ContactList extends React.Component {
    render() {
        return <h1>Hello</h1>
    }
}

export default ContactList