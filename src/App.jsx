import ListGroup from "./componets/ListGroup.jsx";
import React from "react";


class App extends React.Component{
    render() {
        const styles = {
            padding: '20px'
        }

        return (
            <React.Fragment>
                <h1 style={styles}>List Group</h1>
                <ListGroup>
                    <p>one</p>
                    <p>two</p>
                </ListGroup>
            </React.Fragment>
        )
    }
}

export default App
