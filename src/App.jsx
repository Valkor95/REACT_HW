import Carousel from "./componets/Carousel.jsx";
import React from "react";
import images from "./images"

class App extends React.Component{
    render() {


        return (
          <Carousel images={images}/>
        )
    }
}

export default App
