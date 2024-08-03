import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styles from '../../styles/TodoList/TodoList.module.scss'
import styles2 from '../../styles/TodoItem/TodoItem.module.scss'

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
        <div className={styles.todoList}>
            {todos.map(todo => (
                <div key={todo.id + todo.title} className={styles2.todoItem}>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <select
                        value={todo.status}
                        onChange={(e) => {
                            const updatedTodos = todos.map(t =>
                                t.id === todo.id ? {...t, status: e.target.value} : t
                            );
                            localStorage.setItem('todos', JSON.stringify(updatedTodos));
                            setTodos(updatedTodos);
                        }}
                    >
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                        <option value="not-completed">Not-completed</option>
                    </select>
                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    <Link to={`/todo/${todo.id}`}>View</Link>
                </div>
            ))}
        </div>
    );
};

export default TodoList;