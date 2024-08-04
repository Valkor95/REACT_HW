import React, {useState} from "react";
import TodoForm from "../../componets/TodoForm"
import TodoList from "../../componets/TodoList"
import {Link} from "react-router-dom";
import { Button } from '@mui/material';

const Home = () => {
    const [update, setUpdate] = useState(0);

    const handleAddTodo = () => {
        setUpdate(update + 1);
    }

    return (
        <div>
            <h1 style={{marginLeft: '60px', marginTop: '30px', textTransform: 'uppercase'}}
            >Todo List</h1>
            <TodoForm onAddTodo={handleAddTodo}/>
            <Link style={{display: 'flex', justifyContent: 'center'}} to="/todos">
                <Button variant='contained' color='primary'>View All Todos</Button>
            </Link>
            <TodoList key={update}/>
        </div>
    );
};

export default Home