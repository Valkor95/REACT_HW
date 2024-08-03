import React from "react";
import TodoForm from "../../componets/TodoForm"
import TodoList from "../../componets/TodoList"

const Home = () => {
    return (
        <div>
            <h1 style={{marginLeft: '60px', marginTop: '30px', textTransform: 'uppercase'}}
            >Todo List</h1>
            <TodoForm/>
            <TodoList/>
        </div>
    );
};

export default Home