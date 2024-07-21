import Modal from "./componets/Modal.jsx";
import React from "react";


class App extends React.Component{
    state = {modal: false};

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        })
    }

    render() {
        return (
          <Modal />
        )
    }
}

export default App
