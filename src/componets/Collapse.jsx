import React from "react";

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.opened !== undefined
        }
    }
    render() {
        return <h1>Hello</h1>
    }
}

export default Collapse