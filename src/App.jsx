import Carousel from "./componets/Carousel.jsx";
import React from "react";


class App extends React.Component{
    render() {
        const images = [
            '/images/first.jpeg',
            '/images/second.jpeg',
            '/images/third.jpeg',
        ]

        return (
          <Carousel images={images}/>
        )
    }
}

export default App
