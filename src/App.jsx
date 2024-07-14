import Alert from "./componets/Alert.jsx";
import React from "react";


class App extends React.Component{
    render() {
        return (
            <React.Fragment>
                <h1>Alert Example</h1>
                <Alert type="primary" text="Hello new user!"/>
                <Alert type="secondary" text="Welcome to homepage!"/>
                <Alert type="succes" text="Access is done"/>
                <Alert type="" text=""/>
                <Alert type="" text=""/>
                <Alert type="" text=""/>
                <Alert type="" text=""/>
                <Alert type="" text=""/>
            </React.Fragment>

        )
    }
}

export default App
