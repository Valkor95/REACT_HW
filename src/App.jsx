import Carousel from "./componets/Carousel.jsx";
import React from "react";
import firstImage from "./images/first.jpg"
import secondImage from "./images/second.jpg"
import thirdImage from "./images/third.jpg"

class App extends React.Component{
    render() {
        const images = [firstImage, secondImage, thirdImage]

        return (
          <Carousel images={images}/>
        )
    }
}

export default App
