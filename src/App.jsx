import Alert from "./componets/Alert.jsx";
import React from "react";


class App extends React.Component{
    render() {
        return (
            <React.Fragment>
                <h1>Alert Example</h1>
                <Alert type="primary" text="Hello new user!"/>
                <Alert type="secondary" text="Welcome to homepage!"/>
                <Alert type="success" text="Access is done!"/>
                <Alert type="danger" text="Error!"/>
                <Alert type="warning" text="Something is wrong!"/>
                <Alert type="info" text="More information ..."/>
                <Alert type="light" text="Hello new user!"/>
                <Alert type="dark" text="Hello new user!"/>
            </React.Fragment>

        )
    }
}

export default App
