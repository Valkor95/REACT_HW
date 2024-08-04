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

    }, [id]);

    const handleDelete = () => {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        const updatedTodos = todos.filter(t => t.id !== Number(id));
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        navigate('/');
    }

    const handleSave = () => {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        const updatedTodos = todos.map(t => t.id === todo.id ? todo : t);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        setEditMode(false);
        alert('Todo item updated successfully');
    };

    if (!todo){
        return <div>Todo item not found</div>
    }

    return (
        <div className={styles.todoItem}>
            {editMode ? (
                <React.Fragment>
                    <TextField
                        label='Title'
                        value={todo.title}
                        onChange={(e) => setTodo({...todo, title: e.target.value})}
                    />
                    <TextField
                        label='Description'
                        value={todo.description}
                        onChange={(e) => setTodo({...todo, description: e.target.value})}
                    />
                    <Select
                        value={todo.status}
                        onChange={(e) => setTodo({...todo, status:e.target.value})}
                    >
                        <MenuItem value="pending">Pending</MenuItem>
                        <MenuItem value="completed">Completed</MenuItem>
                        <MenuItem value="not-completed">Not-completed</MenuItem>
                    </Select>
                    <Button onClick={handleSave}>Save</Button>
                    <Button onClick={() => setEditMode(false)}>Cancel</Button>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <p>Status: {todo.status}</p>
                    <Button onClick={() => setEditMode(true)}>Edit</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </React.Fragment>
            )}
        </div>
    );
};

export default TodoItemPage;