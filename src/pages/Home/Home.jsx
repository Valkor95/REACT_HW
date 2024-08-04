import React, {useState} from "react";
import TodoForm from "../../componets/TodoForm"
import TodoList from "../../componets/TodoList"

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
            <TodoList key={update}/>
        </div>
    );
};

export default Home