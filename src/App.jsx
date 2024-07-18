import Collapse from "./componets/Collapse.jsx";
import React from "react";


class App extends React.Component{

    render() {
        const text = 'collapse me'
        return (
          <Collapse text={text} opened={false}/>
        )
    }
}

export default App
