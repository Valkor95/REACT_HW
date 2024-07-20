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
        const {tasks, currentTask} = this.state;
        if (currentTask.trim() === '') return;

        const newTask = {id: uniqueId(), text: currentTask};
        this.setState({
            tasks: [newTask, ...tasks],
            currentTask: ''
        })
    }

    handleRemove(id){
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((task) => task.id !== id)
        }));
    }
    render() {
        const {tasks, currentTask} = this.state;

        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex" onSubmit={this.handleSubmit}>
                        <div className="me-3">
                            <input
                                type="text"
                                value={currentTask}
                                onChange={this.handleChange}
                                required
                                className="form-control"
                                placeholder="Enter your text..."
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </form>
                </div>
                <div>
                    {tasks.map((task) => (
                        <Item
                          key={task.id}
                          task={task}
                          onRemove={() => this.handleRemove(task.id)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default TodoBox