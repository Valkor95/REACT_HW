import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styles from '../../styles/TodoList/TodoList.module.scss'
import styles2 from '../../styles/TodoItem/TodoItem.module.scss'

const AllTodosPage = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    return (
        <div className={styles.todoList}>
            {todos.map(todo => (
                <div key={todo.id + todo.title} className={styles2.todoItem}>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <p>Status: {todo.status}</p>
                    <Link to={`/todo/${todo.id}`}>View</Link>
                </div>
            ))}
        </div>
    );
};

export default AllTodosPage;