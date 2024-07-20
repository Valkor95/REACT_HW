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


    }

    handleChange(event){
        this.setState({currentTask: event.target.value});
    }


    render() {
        return <h1>Hello</h1>
    }
}

export default TodoBox