import Progress from "./componets/Progress.jsx";
import React from "react";


class App extends React.Component{
    render() {
        return (
            <React.Fragment>
                <h1>Progress Bar</h1>
                <Progress percentage={40}/>
            </React.Fragment>

        )
    }
}

export default App
