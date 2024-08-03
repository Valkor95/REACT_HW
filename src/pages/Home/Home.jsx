import React from "react";
import TodoForm from "../../componets/TodoForm"
import TodoList from "../../componets/TodoList"

const Home = () => {
    return (
        <div>
            <h1>Todo List</h1>
            <TodoForm/>
            <TodoList/>
        </div>
    );
};

export default Home