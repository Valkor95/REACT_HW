import React from "react";
import Item from "./ChildComponents/Item.jsx";
import {uniqueId} from "./ChildComponents/uniqueId.js";

class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            currentTask: ''
        };

        this.handleChange =  this.handleChange.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this);
        this.handleRemove =  this.handleRemove.bind(this);

    }

    handleChange(event){
        this.setState({currentTask: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        const {task, currentTask} = this.state;
        if (currentTask.trim() === '') return;

        const newTask = {id: uniqueId(), text: currentTask};
        this.setState({
            tasks: [newTask, ...task],
            currentTask: ''
        })
    }

    handleRemove(id){
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((task) => task.id !== id)
        }));
    }
    render() {
        return <h1>Hello</h1>
    }
}

export default TodoBox