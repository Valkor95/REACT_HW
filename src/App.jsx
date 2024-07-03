import Card from "./componets/Card.jsx";
import React from "react";


class App extends React.Component{
  render() {
      return (
          <div className="App">
              <Card title="Title 1"/>
              <Card text="Second card"/>
              <Card title="Title 3" text="Text #3"/>
          </div>
      )
  }
}

export default App
