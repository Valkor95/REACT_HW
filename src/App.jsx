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
                  <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
                  <Modal.Body>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </Modal.Body>
                  <Modal.Footer>
                      <button type="button" className="modal-close-button btn btn-secondary"
                              onClick={this.toggle}>Cancel
                      </button>
                  </Modal.Footer>
              </Modal>
          </div>
        )
    }
}

export default App
