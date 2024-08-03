import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import TodoItemPage from "./pages/TodoItem"
import AllTodosPage from "./pages/AllTodos"


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/todo/:id" element={<TodoItemPage />}/>
                <Route path="/todos" element={<AllTodosPage />}/>
            </Routes>
        </Router>
    );
};

export default App;

