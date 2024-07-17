import React from "react";

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
        }
    }

    goToNext = () => {
        this.setState((prevState) => ({
            currentIndex: (prevState.currentIndex + 1) % this.props.images.length,
        }))
    };

    goToPrev = ()  => {
        this.setState((prevState) => ({
            currentIndex: (prevState.currentIndex - 1 + this.props.images.length) % this.props.images.length,
        }))
    };
    render() {
        const {images} = this.props;
        const {currentIndex} = this.props;

        return (
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                        >
                            <img alt="" className="d-block w-100" src={src}/>
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    data-bs-target="#carousel"
                    type="button"
                    data-bs-slide="prev"
                    onClick={this.goToPrev}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button
                    className="carousel-control-next"
                    data-bs-target="#carousel"
                    type="button"
                    data-bs-slide="next"
                    onClick={this.goToNext}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }
}

export default Carousel