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
          <div>
              <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
              <Modal isOpen={this.state.modal}>
                  <Modal.Header/>
              </Modal>
          </div>
        )
    }
}

export default App
