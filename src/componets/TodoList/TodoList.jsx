import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styles from '../../styles/TodoList/TodoList.module.scss'

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    const handleDelete = (id) => {
      const updatedTodos = todos.filter(todo => todo.id !== id);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      setTodos(updatedTodos);
    };

    return (
        <div>
            
        </div>
    );
};

export default TodoList;