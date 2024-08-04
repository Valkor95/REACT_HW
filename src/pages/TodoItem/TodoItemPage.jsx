import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {TextField, Button, Select, MenuItem} from "@mui/material";
import styles from '../../styles/TodoItem/TodoItem.module.scss'

const TodoItemPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState(null);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        const currentTodo = todos.find(t => t.id === Number(id));
        if (currentTodo) setTodo(currentTodo);

    }, []);

    return (
        <div>

        </div>
    );
};

export default TodoItemPage;