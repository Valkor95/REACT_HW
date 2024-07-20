import React from "react";
import LogControls from "./ChildComponents/LogControls.jsx";
import LogEntry from "./ChildComponents/LogEntry.jsx";

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            log:[]
        }
    }

    handleAdd = () => {
        this.setState(prevState => ({
            log: [prevState.log.length > 0 ? prevState.log[0] + 1 : 1, ...prevState.log]
        }))
    };

    handleSubtract = () => {
        this.setState(prevState => ({
            log: [prevState.log.length > 0 ? prevState.log[0] - 1 : -1, ...prevState.log]
        }))
    };

    handleRemove = (index) => {
        this.setState(prevState => ({
            log: prevState.log.filter((_, i) => i !== index)
        }));
    };
    render() {
        const {log} = this.state;

        return (
            <div>
                <LogControls onAdd={this.handleAdd} onSubtract={this.handleSubtract} />
                {log.length > 0 && (
                    <div className="list-group">
                        {log.map((value, index) => (
                            <LogEntry key={index} value={value} onRemove={() => this.handleRemove(index)} />
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default Component